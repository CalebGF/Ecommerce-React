import Layout from "../../Components/Layout";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {
  // Context
  const {
      orders
  } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1>Orders</h1>

      <div className="flex flex-col w-80 mt-5">
              
          </div>
    </Layout>
    );
  }
  
  export default MyOrders;