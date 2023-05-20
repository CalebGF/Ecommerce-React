import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  return (
    <Layout>
      <div className="home">
          <h1>Holi kase</h1>
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

    </Layout>
  );
}

export default Index;