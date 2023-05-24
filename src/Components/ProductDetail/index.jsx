import './style.css'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import CloseIcon from '@mui/icons-material/Close';

function ProductDetail() {

    // Product details and functions to open/close the product detail aside
    const { productDetailActive, closeProductDetail, product } = useContext(ShoppingCartContext)
    // Product destructuring
    const { title, price, description, images } = product;

  return (
    <aside className={` ${ productDetailActive ? 'flex' : 'hidden' } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <button 
                className="text-black "
                onClick={closeProductDetail}
            >
                <CloseIcon />
            </button>
        </div>
      <figure className="px-6">
        <img 
            className="w-full h-full rounded-lg" 
            src={images?.[0]} 
            alt={title} 
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${price}</span>
        <span className="font-medium text-md mb-1">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail;