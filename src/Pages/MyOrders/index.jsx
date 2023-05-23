import Layout from "../../Components/Layout";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import  OrderListCard  from "../../Components/Cards/OrderListCard";
import { Link } from "react-router-dom";

function MyOrders() {
  // Context
  const {
      orders
  } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
        <h1 className="font-medium text-xl">Orders</h1>
      </div>

      {
      orders?.map( (order, index) => 
        <Link to={`/my-orders/${index}`} key={index}>
          <OrderListCard order={order} key={index} />
        </Link>
      )}
      
    </Layout>
    );
  }
  
  export default MyOrders;