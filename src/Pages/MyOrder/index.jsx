import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from '../../Context';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {totalPrice} from '../../Utils'

function MyOrder() {
  // Context  
  const { orders } = useContext(ShoppingCartContext);
  // Params - URL
  let { id } = useParams();

  // Order is charged according to the id in the URL or the last order
  let order = {};
  if(id != "last"){
    id = parseInt(id);
    console.log("id : " + id);
    order = orders[id];
  } else {
    order = orders.slice(-1)[0];
  }
  return (
    <Layout>
      {/* Order Header */}
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ArrowBackIosNewIcon
            className="text-black cursor-pointer"
            />
        </Link>
        <h1>Order #{id} </h1>
      </div>

      {/* Order Body */}
      <div className="flex flex-col w-80 mt-5">
        {
        order.products.map( product => 
            <OrderCard key={product.id} data={product} />)
        }
      </div>
      {/* Order Footer */}
      <div className="flex flex-col w-80 border-t-2">
        <p className="flex justify-between items-center mb-2">
            <span className="font-light">Date:</span>
            <span className="font-light ">
                ${order.date.toLocaleString()}
            </span>
        </p>
        <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">
                ${order.total}
            </span>
        </p>
      </div>
    </Layout>
    );
  }
  
  export default MyOrder;