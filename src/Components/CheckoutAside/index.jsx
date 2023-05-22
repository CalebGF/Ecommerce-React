import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import { ShoppingCartContext } from '../../Context';
import CloseIcon from '@mui/icons-material/Close';
import OrderCard from '../OrderCard';
import {totalPrice, makeOrder} from '../../Utils'

function ProductDetail() {
    // Context
    const { 
        checkoutAsideActive, 
        closeCheckoutAside, 
        cartProducts,
        orders,
        setOrders, 
        setCartProducts, 
        setCount
    } = useContext(ShoppingCartContext);

    return (
        <aside className={` ${ checkoutAsideActive ? 'flex' : 'hidden' } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <button 
                    className="text-black "
                    onClick={closeCheckoutAside}
                >
                    <CloseIcon />
                </button>
            </div>
            {/* Aside Body - Products */}
            <div className="px-6 overflow-y-scroll flex-1">
                {
                cartProducts.map( product => 
                    <OrderCard key={product.id} data={product} />
                )
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">
                        ${totalPrice(cartProducts)}
                    </span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                        className="w-full bg-black text-white py-4 rounded-lg"
                        onClick={() => {makeOrder(cartProducts, orders, setOrders, setCartProducts, setCount, closeCheckoutAside)}}    
                    >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default ProductDetail;