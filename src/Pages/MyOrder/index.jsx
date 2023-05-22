import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from '../../Context';
import {totalPrice} from '../../Utils'

function MyOrder() {
  // Context
  const {
      orders
  } = useContext(ShoppingCartContext);
  
  return (
    <Layout>
      <h1>Order placed - Thanks for buying!</h1>

      <div className="flex flex-col w-80 mt-5">
        {
        orders?.slice(-1)[0].products.map( product => 
            <OrderCard key={product.id} data={product} />)
        }
      </div>
      <div className="flex flex-col w-80">
        <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">
                ${totalPrice(orders.slice(-1)[0].products)}
            </span>
        </p>
        <div className="flex justify-center">
          <Link to="/my-orders">
              <button 
                className="bg-black text-white py-4 rounded-lg"
              >Check Orders</button>
          </Link>

        </div>
      </div>
    </Layout>
    );
  }
  
  export default MyOrder;