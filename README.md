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

`2` In your `Header.js` add your Header function and structure your divs.


`3` Import `Image` from `next/image` node module

```js
import Image from "next/image"
```

`4` Add your `Image` tag and src's for the images

```js
<Image
  src="https://links.papareact.com/f90"
  width={150}
  height={40}
  objectFit="contain"
  className="cursor-pointer"
  />
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
  <SearchIcon className="h-12 p-4"/>
```

Use `hidden` to hide the search bar on small screens and show when adjusting to larger screens with flexbox

`8` Add tailwind styling to input box

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

```text
git add .
git commit -m "update: add navbar icons and links"
```