const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    // destructure and pass in items to checkout
    const {items, email } = req.body;
    // transform basket items in stripe formatted objects
    const transformedItems = items.map(items => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: "usd",
            unit_amount: item.price * 100, 
            product_data: {
                name: items.title,
                images: [item.image]
            },

        }
    }));

    // create session and send data to stripe
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        // only next shipping is given, but you can add other shipping options. 
        shipping_rate: ['shr_1JtMMTIerg74cifZLouv6e1X'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })
};