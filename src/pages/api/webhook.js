import { buffer } from "micro"
import * as admin from 'firebase-admin'

// Secure a connection to Firebase from the backend
const serviceAccount = require('../../../permissions.json');
const app = !admin.apps.length 
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
        }) 
    : admin.app();

// Establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
// sends data to firebase database
const fulfillOrder = async (session) => {
    return app.firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping /  100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(`SUCCESS: Order ${session.id} had been added to the DB`)
    })
}
export default async (req,res) => {
    if (req.method === 'POST') {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers['stripe-signature'];
        
        let event;
        
        // verify if the event came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            console.log('error', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        // Handle session completed event

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;

            // FulFill the order
            return fulfillOrder(session)
            .then(()=> res.status(200))
            .catch((err) => res.status(400)
            .send(`Webhook Error: ${err.message}`))

        }
    }
};
// disables body parser so the object being sent matches the stripe format
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}