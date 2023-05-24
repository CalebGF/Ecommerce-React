import { useEffect } from 'react';

/**
 * @param {Function} setProducts
 * @returns {Array} products
 * @description Fetch the products from the API
 */
export const apiProducts = (setProducts) =>
{
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, [])
}

/**
 * @param {Array} products
 * @param {String} inputSearch
 * @returns {Array} filteredProducts
 * @description Filter the products by the input search
 */
export const inputSearchProducts = (products, inputSearch) => {
    const filteredProducts = products.filter( product => 
        product.title.toLowerCase().includes(inputSearch.toLowerCase())
    )
    return filteredProducts;
}

/**
 * @param {Array} products
 * @param {String} category
 * @returns {Array} filteredProducts
 * @description Filter the products by the category
*/ 
export const filterCategoryProducts = (products, category) => {
    const filteredProducts = products.filter( product => 
        product.category.name === category
    )
    return filteredProducts;
}