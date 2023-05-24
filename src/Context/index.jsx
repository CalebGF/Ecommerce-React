import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Products 
    const [products, setProducts] = useState([]);

    // Input Search 
    const [inputSearch, setInputSearch] = useState('');

    // Filtered Products
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Category Products
    const [categoryProducts, setCategoryProducts] = useState([]);

    // Shopping Cart - Counter
    const [count, setCount] = useState(0);

    // Shopping Cart - Products
    const [cartProducts, setCartProducts] = useState([]);

    // Checkout Aside - Open/Close
    const [checkoutAsideActive, setCheckoutAsideActive] = useState(false);
    function openCheckoutAside() {setCheckoutAsideActive(true)};
    function closeCheckoutAside() {setCheckoutAsideActive(false);}
    
    // Total orders - Orders
    const [orders, setOrders] = useState([]);

    // Product Detail - Product
    const [product, setProduct] = useState({});

    // Product Detail - Open/Close
    const [productDetailActive, setProductDetailActive] = useState(false);
    function openProductDetail() {setProductDetailActive(true)};
    function closeProductDetail() {setProductDetailActive(false);}

    return (
        <ShoppingCartContext.Provider value={{
            products,
            setProducts,
            filteredProducts,
            setFilteredProducts,
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
            setOrders,
            inputSearch,
            setInputSearch,
            categoryProducts,
            setCategoryProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}