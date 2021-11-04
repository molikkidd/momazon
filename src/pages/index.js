import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed"

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Mo-Amazon</title>
      </Head>
      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>
        {/* Product Feed */}
        <ProductFeed products={products}/>

      </main>
    </div>
  );
}

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
