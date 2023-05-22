import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutAside from "../../Components/CheckoutAside";

function Index() {
  //  Load product from Platzi API
  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);


  return (
    <Layout>
      <div className="home">
          <h1>Home</h1>
      </div>

      {<div className="grid gap-4 grid-cols-4 lg:grid-cols-3 w-full max-w-screen-lg">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>}

      <ProductDetail />
      <CheckoutAside />
    </Layout>
  );
}

export default Index;