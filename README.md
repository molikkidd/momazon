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

