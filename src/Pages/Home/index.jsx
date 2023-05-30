import { useContext, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutAside from "../../Components/CheckoutAside";
import { apiProducts, inputSearchProducts, filterCategoryProducts } from "../../Utils/Products";
import { ShoppingCartContext } from '../../Context';

function Index() {
  // Context  
  const { 
    products,
    setProducts, 
    inputSearch, 
    setInputSearch, 
    filteredProducts, 
    setFilteredProducts,
    categoryProducts,
    setCategoryProducts
  } = useContext(ShoppingCartContext);
  
  // Load products from API
  apiProducts(setProducts);

  // Filter products using filterProducts function from Utils
  useEffect(() => {
    if (inputSearch) setFilteredProducts(inputSearchProducts(products, inputSearch))
    if (categoryProducts) setCategoryProducts(filterCategoryProducts(products, inputSearch))
    }, [products, inputSearch]);

  // Render products depending if there is an input search or not
  function renderProducts() {
    if (inputSearch) {
      return filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))
    } else {
      return products.map((product) => (
        <Card key={product.id} product={product} />
      ))
    }
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
        <h1 className="font-medium text-xl">Trending Products</h1>
      </div>
      
      <input 
        type="text"
        className="rounded-lg border w-80 p-3 mb-4 border-gray-300 focus:outline-none "
        onChange={(event) => setInputSearch(event.target.value)}
        placeholder="Search products"
      />

      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                       w-4/5  max-w-screen-lg gap-4
                       ">
        {renderProducts()}
      </div>}

      <ProductDetail />
      <CheckoutAside />
    </Layout>
  );
}

export default Index;