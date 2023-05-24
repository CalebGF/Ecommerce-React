import CloseIcon from '@mui/icons-material/Close'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { removeProduct } from '../../Utils'


function OrderCard(props) {
    
    const { title, images, price } = props.data;
    const { cartProducts, setCartProducts, count, setCount, productDetailActive } = useContext(ShoppingCartContext)

    return (
        <div className="order-card flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img 
                        src={images[0]} 
                        alt={title} 
                        className="w-full h-full rounded-lg object-cover "
                    />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                {/* If the product aside is active, show the button */}
                {productDetailActive && <button 
                    className="text-black "
                    onClick={(event) => 
                        removeProduct(
                            event,
                            count,
                            setCount, 
                            props.data.id, 
                            cartProducts, 
                            setCartProducts
                        )}
                >
                    <CloseIcon />
                </button>}
            </div>
        </div>
    );
}

export default OrderCard;