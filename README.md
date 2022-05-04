# Installation Steps

## Using npm

Run commands

1) ```npm install```

2) ```npm run dev```

## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


### If you see the window below then you are set to build AMAZON 2.0!

## What it includes

* Passport and passport-jwt for authentication
* Sessions to keep user logged in between pages
* Passwords that are hashed with BCrypt
* REACT JS FrameWork

## `1` Fork & Clone Project & Install Dependencies

`1` The first thing that we are going to do is `fork` and `clone`

`2` Now we are going to install the current dependencies that are listed inside of `package.json`

```text
npm install next react react-dom react-redux tailwindcss firebase firebase-admin
```

```text
- [next](https://github.com/vercel/next.js):
  Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. 
-  [react](https://www.npmjs.com/package/bcryptjs): 
  package contains only the functionality necessary to define React components.
- [react-dom](https://github.com/jaredhanson/connect-flash): 
  serves as the entry point to the DOM and server renderers for React. Allows user to interact with the DOM.
- [react-redux](https://github.com/reduxjs/react-redux):
  Redux is a predictable state container for JavaScript apps.
  It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss):
  A utility-first CSS framework packed with classes that ease the process of styling.
- [firebase](https://github.com/expressjs/express):
  provides the tools and infrastructure you need to develop, grow, and earn money from your app.
- [firebase-admin](https://github.com/expressjs/session): 
  The Firebase Admin Node.js SDK enables access to Firebase services from privileged environments (such as servers or cloud) in Node.js.
```

`4` Make a commit

```text
git add .
git commit -m "add: Install initial dependencies for project"
```


`5` Shortcuts

* make sure your `language emmetter` works.
* install `ES7 REACT/REDUX/GRAPH` extension in VSCode
* install `auto rename tag` extension in VSCode
* save tailwindcss file again if changes do not show immediately
* install hero icons

```text
yarn add @heroicons/react
```

* install `Tailwing CSS Intellisense` for auto complete of tailwind variables

## `2` Create Amazon Navbar

`1` Inside of your src folder Create another folder called `components` and add `Header.js`

`2` In your `Header.js` add your Header function and structure your divs. The following code below should wrap around the whole of your top Navbar

```js
  <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
  // Insert subsequent code in here
  </div>
```

`3` Import `Image` from `next/image` node module to the top of your page

```js
import Image from "next/image"
```

`4` Add your `Image` tag and src's for the images

```js
 <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
    <Image
    src="https://links.papareact.com/f90"
    width={150}
    height={40}
    objectFit="contain"
    className="cursor-pointer"
    />
</div>
```

`5` setup next.js to connect images to your domain. Create a nextconfig.js file at the root of the folder and add the following code inside. 

```js
module.exports = {
    images: {
        domains: ['links.papareact.com', 'fakestoreapi.com']
    }
};
```

Then restart your server



`6` Import the shopping, search and menu icons from hero icons

```js
import { MenuIcon, 
        SearchIcon, 
        ShoppingCartIcon } 
        from "@heroicons/react/outline"
```

`7` then add your `SearchIcon` to the search div. Use `hidden` to hide the search bar on small screens and show when adjusting to larger screens with flexbox

`8` Add tailwind styling to input box

```js
  {/* search bar */}
  <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
      <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
      <SearchIcon className="h-12 p-4"/>
  </div>
```

![Screen Shot 2021-11-04 at 11 49 57 AM](https://user-images.githubusercontent.com/28605078/140438027-2064aaa9-9839-4e60-8b16-1d6a3ef604c3.png)


`9` Add Icons to the right side of the navbar

`10` Add links to navbars by adding a custom utility to your components using tailwind. Go to your styles/global.css and add the following code 

```css
/* how to create a custom utility class */
@layer components {
    .link {
        @apply cursor-pointer hover:underline
    }
}
```

`11` Then change the `className` to `link` for each icon div. Add number above the basket to show how many items you have in the shopping Cart.

```js
{/* Right Side Icons */}
  <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"> 
      <div className="link">
          <p>Hello Moto</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
      </div>
      <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
      </div>
      <div className="relative link flex items-center">
      // Number of items in the shopping Cart
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
          <ShoppingCartIcon className="h-10"/>
          <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
      </div>
  </div>
```

![Screen Shot 2021-11-04 at 12 37 14 PM](https://user-images.githubusercontent.com/28605078/140438112-5ad1deb7-26c2-4bcc-93a9-32110f69c615.png)

```text
git add .
git commit -m "update: add navbar icons and links"
```

`12` Add Menu Icon to the navbar along with associated links and style using tailwind

```js
  <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1"/>
            All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Groceries</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
    </div>
```

![Screen Shot 2021-11-04 at 2 51 03 PM](https://user-images.githubusercontent.com/28605078/140438133-f24993db-d028-40de-8102-fd5f7e573521.png)

```text
git add
git commit -m "update: complete navbar basics"
```

## `3` Create Banner and Product Feed

`1` Inside of your `index.js` file create a `main` tag and inside of their create your `Banner` 

`2` inside of your `components` create at `Banner.js` file

`3` install and add `react-responsive-carousel` to your Banner file along 

```text
yarn add react-responsive-carousel
```

You also have to import the react-resposive-carousel css

```js
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

```

`4` Add your Carousel to your `Banner` function as well as your associate links and tailwind styling

```js
<div className="relative">
  <div className="absolute w-full h-32 bg-gradient-to-t from-bg-gray-100 to to-transparent bottom-0 z-20"/>

  <Carousel autoPlay 
  infiniteLoop 
  showStatus={false} 
  showIndicators={false}
  showThumbs={false} 
  interval={5000}>
      <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="carousel image" />
      </div>
      <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="carousel image" />
      </div>
      <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="carousel image" />
      </div>
  </Carousel>
</div>
```

![Screen Shot 2021-11-04 at 2 50 49 PM](https://user-images.githubusercontent.com/28605078/140438148-1bbf3390-0c6a-47da-8568-d0b399a4ec47.png)


## `4` Create Product Feed component

`1` Add your `ProductFeed.js` to your components folder

`2` Go back to your `index.js` file and connect your app to the fakestoreapi to grab product information for the `productfeed`

```js
// Get the serverside props and render them before delivering
// the data to the clients page
export async function getServerSideProps(context) {
  // fetch products from api
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json()
  );
   return {
      props: {
        products
    }
  };
}
```

`3` Then deconstruct your props in your `Home` function to take in products as an input. pass products props to ProductFeed component

```js
function Home({products})
```

`4` Create a `Product.js` component which will serve as a template for each product on the page.

`5` Deconstruct your product attributes on your ProductFeed function and map thru the products then pass those properties on to your `Product.js` component

```js
import Product from "./Product";

export default function ProductFeed({products}) {
    return (
      <div>
        <h2>products goes here</h2> 
        
        {products.map(({id, title, price, description, category, image}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
      </div>
    )
}
```


`6` install react-currency-formatter which will add global currency symbols to your page.

```text
yarn add react-currency-formatter
```

`7` Also add a custom amazon button thru tailwindcss

```css
.button {
  @apply p-2 text-xs md:text-sm bg-gradient-to-b 
  from-yellow-200 to-yellow-400 border border-yellow-300 
  rounded-sm focus:outline-none focus:ring-2 
  focus:ring-yellow-500 active:from-yellow-500
    }
```
`8` Add grid to `ProductFeed` which will responsively change as the width of the screen changes. 

```js
 <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx:auto">

  {products.slice(0,4).map(({id, title, price, description, category, image}) => (
      <Product
      key={id}
      id={id}
      title={title}
      price={price}
      description={description}
      category={category}
      image={image}
      />
  ))}
  </div>
```

![Screen Shot 2021-11-04 at 3 53 59 PM](https://user-images.githubusercontent.com/28605078/140438235-5417eda7-58da-4795-849c-a637e0c7ece2.png)


`9` Add image to bottom of `ProductFeed.js`, belowe the grid which will act as aan advertisement banner. 

```js
  <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
```

`10` And to finish off the page, add images below your advertisement banner by slicing your images to show the first 4 products--> ads --> display the remaining products

```js
import Product from "./Product";

export default function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx:auto">

           {products.slice(0,4).map(({id, title, price, description, category, image}) => (
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}

           <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

           <div className="md:col-span-2">
           {products.slice(4,5).map(({id, title, price, description, category, image}) => (
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}
           </div>
           {products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}
        </div>
    )
}
```

![Screen Shot 2021-11-04 at 5 25 40 PM](https://user-images.githubusercontent.com/28605078/140438393-ad389523-1d52-42d0-9dd4-4aec2304ed7c.png)

```text
git add .
git commit -m "add: create tailwind grid, add advertisement banner and style amazon button"
```

## `5` Setup `NextAuth.js` along with `Firebase`

`1` install NextAuth.js

```text 
yarn add next-auth
```

`2` create an `api` folder within your `pages` folder to create your own api endpoint. 

`3` With in the api folder, create another folder called `[...nextauth].js` , then Copy and paste the api route from the `nextauth.js` documentation below into your `[...nextauth].js`

```js
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})
```

`4` Change the Providers according to your liking, but for this build we are using google login. Change GithubProvider to the following

```js
export default NextAuth({

providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
]
})
```

`5` Create an `.env.local` file at the root folder and add your google id and secret variables.

```text
# Authentication
GOOGLE_ID=key_goes_here
GOOGLE_SECRET=key_goes_here
NEXTAUTH_URL=http://localhost:3000
```

`6` Head over to `firebase.com`, create an account if you dont have one already. Then create a new project.

`7` go to your project settings, go to the bottom of the page and click the route icon to register your application.

`8` click `continue` then click `continue to console`

`9` In your console, go to your apps below, select the `config` dial under `SDK setup and configuration` and
copy the code.

`10` Create a `firebase.js` file on the root level of the project and paste in the copied code.

`11` Go back to Firebase and click `Authenication` on the side menu then click `Get Started`.

`12` Select Google then select `Enable`. Type in your email into the `project support email` then click save.

`13` Click on Google again, go down to `Web SDK configuration` and copy the  `Web client ID` and `Web client secret`

`14` Go back your `.env.local` file and paste the `Web client ID` and `Web client secret` to their associated Google variables.


`15` If you havent install firebase already then install it now with 

```text
yarn add firebase
```

Then import firebase into your `firebase.js` file

```js
import firebase from "firebase";
```

## `6` Add `SignIn` and `SignOut` to home page

`1` import `signin`, `sign` and `useSession` inside of your `Header.js`

```js
import {signIn, signOut, useSession } from "next-auth/client"
```

`2` Test your Google sign in by adding an onclick event to one of your right side icons div.

```js
  <div onClick={signIn} className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"> 

```

`3` You will have an error when signing in to your google account initially so, go to `https://console.cloud.google.com`, select your application. It might not show in your current selection of projects so make sure to click `ALL`.

`4` Select your project, click `Credentials` on the sidemenu then click the `Web Client` link within the `OAuth 2.0 client IDS`

`5` Within there, add `http://localhost:3000` to `Authorized Javascript origins` then add the redirect link provided in the error. ex: `http://localhost:3000/api/auth/callback/google`. Save the file then test your sign in again. 

`6` Go to your `_app.js` file and import your providers so it will allow you to access your authenication across all pages in the application. 

```js
import { Provider  as AuthProvider } from 'next-auth/client'
```

then add AuthProvider as a higher order component within the file

```js
<AuthProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

</AuthProvider>
```

`7` Go back to your `index.js` and declare your `useSession` so that you can monitor whether the user is logged in or not. Within Header function before the return. add your `session` variable.

```js
    const [session] = useSession();
```

Then add a conditional statement checking whether the user is login in, if not then `SignIn`.

```js
  {session ? `Hello, ${session.user.name}` : "Sign In"}
```

also adjust your `signIn` to a conditional that allows the user to sign out if they are in a session and vice versa.

```js
  <div onClick={!session ? signIn : signOut} className="link">
```

## `7` Create Checkout page

`1` Create a `Checkout` file in your `pages` folder.

`2` Import the `Header` component into your `Checkout` file. 

`3` Then route your `BasketIcon` to the `Checkout` page by going to your `Header.js` file and importing `Router` from NextAuth.

```js
import { useRouter } from "next/router"
```

Then establish the router object within the Header function. The router helps the client navigate back and forth between web pages in the application.

```js
  const router = useRouter();
```

`4` Add a onlick event to the amazon logo so that you're routed back to the home page. 

```js
  onClick={() => router.push('/')}
```

`5` Go back to your `checkout.js`, Create a container for the Shopping basket information and add the following code.


```js
<main className="lg:flex max-w-screen-2xl mx-auto">
    {/* left hand */}
    <div className="flex-grow m-5 shadow-sm">
        <Image 
        src="https://links.papareact.com/ikj"
        width={1020}
        height={250}
        objectFit="contain"
        />
    </div>
    {/* right hand */}
    <div className="flex flex-col p-5 space-y-10 bg-white">
        <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
    </div>
</main>

```

`6` Use Redux.js to act as a global store, so that you can grab information without sending down data through props. Redux centralizes your app state and helps you write apps that behave consistently. Create an `app` folder then a `store.js` file with in it. add the following code.

```js
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
```

`7` Then Create a `slices` folder and add `basketSlice.js`, which will hold the logic for when items are added and removed from the store.  

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
```

`8` Go to your `Product.js` Add an onclick event to the button so that the item can be added to the basket Store (Shopping Basket). Then establish a couple variables the addToBasket and dispatch functions. When you commit and action on the store an action is required, useDispatch is the action the allows us to commit that action.

```js
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"

  const dispatch = useDispatch();
  const addItemToBasket = (
    const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image
        };
        dispatch(addToBasket(product))
  ) => {};

  <button onClick={addItemToBasket}className="mt-auto button"> Add to Basket</button>

```

With in the `addItemToBasket` function we use the addToBasket function from our store to pass in the product. The dispatch webhook commits the action for us, essentially sending the product as an action.

`9` Go back to your `basketSlice.js` and use a spread operator to maintain the state of the current items in the store while adding new items from dispatch payload.

```js
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {},
  },
});
```

`10` Now, we want to see how many items are in our store after we added them. Go to your `Header.js` and import the `useSelector` built in method and the `selectItems` from your `basketSlices.js`.

```js
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice"
```

`11` Store all the items with in a variable then display how many items we have in the basket.

```js
const items = useSelector(selectItems)
```

`12` Then change the `0` in the span for the ShoppingCartIcon to `{items.length}`

`13` Create a `CheckoutProduct.js` component to act a template for each product.

`14` The next thing we want to do is Display which items are in the Shopping Basket. Grab all the items from the Shopping Basket. If there arent any items then display a message otherwise show the items in the basket. Go to the `checkout.js` , import the `CheckoutProduct.js` and complete the previous steps from `11 , 12` selecting items from the store. Then Change the h1 tag to the following.

```js
 <h1 className="text-3xl border-b pb-4">
  {items.length === 0 ? 'Your Momazon Basket is empty.' : "Shopping Basket"}
 </h1>
```

Iterate through all the products in the basket and send the items to `CheckoutProduct`

```js
{items.map((item, i) => (
  <CheckoutProduct
  key={i}
  id={item.id}
  title={item.title}
  price={item.price}
  rating={item.rating}
  description={item.description}
  category={item.category}
  image={item.image}
  hasPrime={item.hasPrime}

  />            
))}
```

`15` Go back to the `CheckoutProduct.js` and pull in the props. import the necessary dependencies

```js
function CheckoutProduct(   {
    id, 
    title, 
    price, 
    description, 
    category,
    rating, 
    image,
    hasPrime,
}) {
  return ( <div className="grid grid-cols-5">
      {/* Left side */}
      <Image src={image} height={200} width={200} objectFit="contain"/>
      {/* Middle */}
      <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex">
              {Array(rating)
              .fill()
              .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500"/>
              ))}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <Currency quantity={price} currency="USD"/>
          {hasPrime && (
              <div className="flex items-center space-x-2">
                  <img 
                  loading="lazy"
                  className="w-12"
                  src="https://links.papareact.com/fdw" 
                  alt="" />
                  <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
          )}
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <button className="button mt-auto"> Add to Basket</button>
      <button className="button mt-auto">Remove from Basket</button>
      </div>
  </div>
  )
```

`16` Then add the functionality for the click event when you want to remove or add a product. 

```js
const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            rating,
            price, 
            description, 
            category, 
            image,
            hasPrime
        };
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
```

and add an onclick event to the buttons 

```js
<button onClick={addItemToBasket} className="button mt-auto"> Add to Basket</button>
<button onClick={removeItemFromBasket} className="button mt-auto">Remove from Basket</button>
```

`17` since we already built of the functionality for the `addToBasket` function, we have to add it for the `removeFromBasket` as well. Go back to your `basketSlice.js` and add the following to the `removeFromBasket` function

```js
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        // find the item by the id
        (basketItem) => basketItem.id === action.payload.id
        );
        // once found save the contents of the new basket
      let newBasket = [...state.items];

      if(index >= 0) {
        // remove found item at its index
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) because its not in the store`
        );
      }
      // assign items to the new array minus the removed item
      state.items = newBasket;
    },
```

`18` Now the last aspect of this initial build for the shopping cart is to add the subtotal of all the items. Go to your `checkout.js` and import `useSession` and `Currency`. add the session variable to the function then add the following code. 

```js
<div className="flex flex-col bg-white p-10 shadow-md">
    {items.length > 0 && (
        <>
        <h2 className="whitespace-nowrap">
            SubTotal ({items.length} items):
            <span className="font-bold">
                {/* <Currency quantity={total} currency="USD"/>  */}
            </span>
        </h2>

        <button 
        disabled={!session}
        className={`button mt-2 ${
            !session && 
            'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
            }`}>
            {/* if youre not logged in then sign in otherwise checkout */}
            {!session ? "sign in to checkout" : "Proceed to checkout"}
        </button>
        </>
    )}
</div>
```

`19` Now that we have the basics for our checkout setup, Now its time to implement the calculate the subTotal. Go back to the `basketSlice.js`. add the following code below the `selectItems` variable

```js
// gives the total starting at 0, and add on the item price thru each iteration through the list of items 
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);
```

then import the `selectTotal` to your `checkout.js` and add the `total` object `SubTotal` h2

```js
import { selectItems, selectTotal } from "../slices/basketSlice"

function Checkout() {
  ...
  const total = useSelector(selectTotal)
  ...

<h2 className="whitespace-nowrap">
    SubTotal ({items.length} items):
    <span className="font-bold ml-2">
        <Currency quantity={total} currency="USD"/> 
    </span>
</h2>
}

```

if you're using vercel then you will have to add your environment variables to the project, as well as change the links in your google cloud console account to take in next redirect URI

## `8` Connect Checkout Page to Stripe

`1` Install Stripe to handle Checkout and card information. Both stripe and stripe-js must be installed. Stripe is used to make server side requests to the API and stripe-js provides methods for client-side-code. 

```text
yarn add stripe
yarn add @stripe/stripe-js

```

`2` Change the syntax on the `checkout` button to match that of the stripe documentation. 

```js
<button role="link"
disabled={!session}
... 
>
  Checkout
</button>
```

`3` Create Checkout Session.
We have to send the basket items to stripe so that the user can make a payment. When items are sent, Stripe creates a session. Go to the `checkout.js` and the createCheckoutSession function. 

```js
const createCheckoutSession = () => {
    
}
```

`4` stripe uses a public key to allows users to connect with their stripe account. Sign up for a stripe account and copy and paste the `pushblishable key` and `secret key` into your `env.local.`

`5` Then go to your `next.config.js` file and add an env variable that will set your public key

```js
env: {s
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
},
```

`6` Now create a `create-checkout-session` file in your `api` folder. 

`7` Then install `axios` to assist with the backend calls to the API.

```text
yarn add axios
```

`8` Within the `create-checkout-session.js` require stripe and axios to make a request to the stripe end point. destructure the req data.

```js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    // destructure and pass in items to checkout
    const {items, email } = req.body;

};

```

`9` Go back to your `checkout.js` and add the function `createCheckoutSession` , sending the requested data. Then add an `onClick={createCheckoutSession}` event to the `proceed to checkout` button.

```js
    const createCheckoutSession = async () => {
            const stripe = await stripePromise;

            // call to backend endpoint and pass in the products from the basket and the 
            // the user email.
            const checkoutSession =  await axios.post('/api/create-checkout-session', { 
                items: items,
                email: session.user.email
                });
    }
```

`10` Go back to your `create-checkout-session.js` and transform the sent data into a stripe format.

```js
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
```

`11` Then use stripes built in methods to create a session and send the formatted data to stripe.

- Side Note: create a shipping rate in your stripe account, by going to the `Products` , click on `Shipping rates`, `add new shipping rate` then input the necessary information. Copy the shipping rate `ID` and it to the `shipping_rate` attribute in your session object.

```js
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
    // respond to the requested data
    res.status(200).json({ id: session.id})
```



`12`Logic -> the `createCheckoutSession` function contacts the api and creates a session, then responds to the backend `res`ponds to the `req`uest and with the session then redirects to the Stripe checkout page. Add the following code below into the `createCheckoutSession`

```js
 // Redirect user/customer to stripe Checkout
  const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
  })

  if (result.error) {
      alert(result.error.message);
  };
```

`13` Now test the `Proceed to Checkout button`. It should redirect you to the stripe checkout page with the products from the basket.

`14` Now we have to create a webhook to store the basket information into a database, so that we can send the information to our `/success` route once the payment information is entered. install stripe cli, use the correct install method depending on the type of os you have. 

```text
brew install stripe/stripe-cli/stripe
```

`15` Check to see if stripe is installed properly on your machine by typing in `stripe` into the command line. You should get back a list of options. After you have successfully installed stripe cli, login into to your stripe account `stripe login` and follow the commands from the browser and `allow access`. Make sure you are connecting to the correct store.

`16` Go back to command line and type in `stripe listen --forward-to localhost:3000/api/webhook` and copy the webhook signing secret to your .env.local file under the `STRIPE_SIGNING_SECRET` 


`17` CREATE WEBHOOK, create `webhook.js` inside the `api` folder


`18` Then install micro and firebase-admin

```text
yarn add micro
yarn add firebase-admin
```

`19` Go to your `firebase` account, click on the associated project for the build, then go to the project settings --> service accounts and `generate new private key`. Copy and paste the raw data view into a new file called `permissions.json` at the root level of your application. This allows us access to the backend database.

`20` Stay within your `Firebase account` and  go to the `Firebase Database` on the left handside to set up your database to save the data being sent from the webhook. click `create database` and start in test mode for this build. then click `enable`

`21` Go back to your `webhook.js`, and add the following code.

```js
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
```

`22` Check your Webhook by running `stripe listen --forward-to localhost:3000/api/webhook` again in another terminal window. Go to your website, add products to the basket, complete the mock payment information. You should success messages in your terminal, then go back to the firebase database and check whether the order information populates. 

## `9` Create a Success page to route after 

`1` Create a `success` page and add the following code to the file.

```js
import { CheckCircleIcon } from "@heroicons/react/solid"
import router, { useRouter } from "next/router"
import Header from "../components/Header"

function success() {

    const router = useRouter();

    return (
        <div className="bg-gray-100">
            <Header/>

            <main className="max-w-screen-lg mx-auto">
                <div className="flec flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10"/>
                        <h1 className="text-3xl">
                            Thank you, your Order has been confirmed!
                        </h1>
                    </div>
                    <p>
                        Thank you for shipping with us. We'll send a confirmation 
                        once your item has shipped, if you would like to check 
                        the status of your order(s) please press the link below
                    </p>
                    <button onClick={()=> router.push("/orders")} className="button mt-8">Go to my orders</button>
                </div>
            </main>
        </div>
    )
}

export default success

```

## `10` Build the Orders to page

`1` Create a `orders` page .

```js
import { useSession } from "next-auth/client"
import Header from "../components/Header"

function Orders() {
    const [session] = useSession();
    return (
        <div>
        <Header/>
        <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400" >
                Your Orders
            </h1>
            {session ? (
                <h2> Orders</h2>
            ) : (
                <h2>Pleae sign in to see your orders</h2>
            )}

            <div className="mt-5 space-y-4">
            // Map thru the orders and pass each one to the orders component
            // Uncomment this section once the ORDERS COMPONENT IS COMPLET
            // {orders?.map(({ id, amount, amountShipping, items, timestamp, images}) => (
            //         <Order 
            //         key ={id}
            //         id={id}
            //         amount={amount}
            //         amountShipping={amountShipping}
            //         items={items}
            //         timestamp={timestamp}
            //         images={images}
            //         />
            //     ))}
            </div>
        </main>
        </div>
    )
}

export default Orders;
```


`2` The next steps is to connect to the firebase database and grab the orders and render them on the page, but first we must go back to our firebase.js and initialize our db for export to the orders page. add the following. 

```js
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore()

  export default db;
```


`3` Go back to the orders page and connect to the Firebase database and grab all the orders

```js
export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const session = await getSession(context);
    if(!session) {
        return {
            props: {},
        };
    }
    // Firebase Database
    const stripeOrders = await db.collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

    // Stripe Orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    };
}
```

`4` Add `moment` so that you can share timestamps across databases

  ```text
  yarn add moment
  ```

`5` Create a `Order.js` component for each individual order in the database. 

```js
import moment from "moment"
import Currency from "react-currency-formatter"

function Order({ id, amount, amountShipping, items, timestamp, images}) {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
            <div>
                <p className='font-bold text-xs'>Order Placed</p>
                <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
            </div>
            <div>
                <p className="text-xs font-bold">TOTAL</p>

                <p>
                    <Currency quantity={amount} currency="USD"/> - Next Day Delivery{" "}
                    <Currency quantity={amountShipping} currency="USD"/>
                </p>
            </div>
            
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
                    {items.length} items
                </p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
                    Order # {id}
                </p>
            </div>

            <div className="p-5 sm:p-10 ">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map(image => (
                        <img src={image} alt="" className="h-20 object-contain sm:h-32"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Order

```

`6` Restart your server and test the full functionality of the application.

