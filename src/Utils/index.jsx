
/**
 * @param {array} cartProducts
 * @returns {number} total
 * @description Calculates the total price of the products in the shopping cart
 */
export const totalPrice = (cartProducts) => {
    let total = 0;
    cartProducts.forEach( product => total += product.price)
    return total;
}

// Function to remove this product from the shopping cart
/**
 * @param {event} event
 * @param {number} count
 * @param {function} setCount
 * @param {number} dataId
 * @param {array} cartProducts
 * @param {function} setCartProducts
 * @description Removes a product from the shopping cart
 * @returns {void}
 *
*/
export const removeProduct = (event, count, setCount, dataId, cartProducts, setCartProducts) => {
    event.stopPropagation()
    setCount(count - 1)
    const newCartProducts = cartProducts.filter( product => product.id !== dataId)
    setCartProducts(newCartProducts)
}

/**
 * @param {array} cartProducts
 * @param {function} setRecentOrder
 * @param {array} orders
 * @param {function} setOrders
 * @param {function} setCartProducts
 * @param {function} setCount
 * @description Creates a new order and adds it to the orders array and resets the shopping cart
 */
export const makeOrder = (cartProducts, orders,  setOrders, setCartProducts, setCount, closeCheckoutAside) => {
    const order = {
        date: new Date(),
        products: cartProducts,
        total: totalPrice(cartProducts)
    }
    setOrders(orders => [...orders, order]);
    setCartProducts([]);
    setCount(0);
    closeCheckoutAside();
}


/**
 * @description Input search filter
 */
export const filterProducts = (products, inputSearch) => {
    const filteredProducts = products.filter( product => 
        product.title.toLowerCase().includes(inputSearch.toLowerCase())
    )
    return filteredProducts;
}