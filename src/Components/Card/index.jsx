import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import './style.css'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function Card (props) {
    // Product Details
    const {title, image, category, price }  = props.product;

    // Shopping Cart - Counter - Open - Set Product 
    const { count, setCount, openProductDetail, closeProductDetail, setProduct, cartProducts, setCartProducts, openCheckoutAside, closeCheckoutAside } = useContext(ShoppingCartContext)
    
    // Function to send product details
    const showProduct = () => {
        setProduct(props.product)
        closeCheckoutAside()
        openProductDetail()
    }

    // Function to add this product to the shopping cart
    const addProduct = (event) => {
        event.stopPropagation()
        closeProductDetail()
        setCount(count + 1)
        setCartProducts([...cartProducts, props.product])
        openCheckoutAside()
    }

    

    // Function to show icon in case of product is already in the shopping cart
    const renderIcon = () => {
        const productInCart = cartProducts.find( product => product.id === props.product.id)
        
        if (productInCart) {
            return <CheckIcon 
                className='check-btn absolute top-0 right-0 flex bg-black rounded-xl text-white m-2' 
                onClick={(event) => event.stopPropagation() }
            />
        }else {
            return <AddCircleOutlineIcon 
                onClick={(event) => addProduct(event) }
                className='add-btn absolute top-0 right-0 flex text-white m-2' 
            />
        }
    }


    return (
        <div className='bg-white cursor-pointer w-56 h-60'
            onClick={() => showProduct()}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ category }</span>
                <img className='w-full h-full object-cover rounded-lg' src={ image } alt={category} />
                <button>
                    {renderIcon()}
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{ title }</span>
                <span className='text-lg font-medium'>{ price }</span>
            </p>
        </div>
    );
}

export default Card;