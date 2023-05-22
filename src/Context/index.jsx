import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart - Counter
    const [count, setCount] = useState(0);

    // Shopping Cart - Products
    const [cartProducts, setCartProducts] = useState([]);

    // Checkout Aside - Open/Close
    const [checkoutAsideActive, setCheckoutAsideActive] = useState(false);
    function openCheckoutAside() {setCheckoutAsideActive(true)}
    function closeCheckoutAside() {setCheckoutAsideActive(false);}

    
    // Total orders - Orders
    const [orders, setOrders] = useState([]);

    // Product Detal - Open/Close
    const [productDetailActive, setProductDetailActive] = useState(false);
    function openProductDetail() {setProductDetailActive(true)}
    function closeProductDetail() {setProductDetailActive(false);}

    // Product Detail - Product
    const [product, setProduct] = useState({});

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            productDetailActive,
            openProductDetail,
            closeProductDetail,
            product,
            setProduct,
            cartProducts,
            setCartProducts,
            checkoutAsideActive,
            openCheckoutAside,
            closeCheckoutAside,
            orders,
            setOrders
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}