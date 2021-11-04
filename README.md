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
npm install next react react-dom react-redux 
tailwindcss firebase firebase-admin
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
* install `auto rename tag`
* save tailwindcss file again if changes do not show immediately
* install hero icons

```text
yarn add @heroicons/react
```

## `2` Create Amazon Navbar

`1` Inside of your src folder Create another folder called `components` and add `Header.js`

`2` In your `Header.js` add your Header function and structure your divs. The following code below should wrap around the whole of your top Navbar

```js
  <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
  // Insert subsequent code in here
  </div>
```

`3` Import `Image` from `next/image` node module

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

`7` then add your `SearchIcon` to the search div and style with tailwind. 

```js
  {/* search bar */}
  <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
      <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
      <SearchIcon className="h-12 p-4"/>
  </div>
```

Use `hidden` to hide the search bar on small screens and show when adjusting to larger screens with flexbox

`8` Add tailwind styling to input box

`9` Add Icons to the right side of the navbar

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
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
          <ShoppingCartIcon className="h-10"/>
          <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
      </div>
  </div>
```
`10` Add links to navbars by adding a custom utility to your components using tailwind. Go to your styles/global.css and add the following code 

```css
/* how to create a custom utility class */
@layer components {
    .link {
        @apply cursor-pointer hover:underline
    }
}
```

```text
git add .
git commit -m "update: add navbar icons and links"
```

`11` Add number above the basket to show how many items you have. Add right above the shopping Cart

```js
  <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
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

```text
git add
git commit -m "update: complete navbar basics"
```