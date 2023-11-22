import { createContext, useState, useEffect } from "react";


export const CartContext = createContext(null)

export const ShoppingCartProvider = ({
    children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log("Productos en el carrito:", cart);
    }, [cart]);

    // const getCartFromLS = () => {
    //     const cartLSGet = JSON.parse(localStorage.getItem("cartLS"));
    //     cartLSGet && setCart(cartLSGet);
    // };

    // const setCartLS = () => localStorage.setItem("cartLS", JSON.stringify(cart));

    // const itemInCart = (id) => cart.some((item) => item.id === id);

    const addItemCart = (item, quantity) => {

        const existingProductIndex = cart.findIndex((prod) => prod.id === item.id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            const numericPrice = parseFloat(item.price);
            if (!isNaN(numericPrice)) {
                setCart([...cart, { ...item, quantity, price: numericPrice }]);
            } else {
            }
        }
    };
    const removeItem = (itemId) => {
        const updatedCart = cart.filter((prod) => prod.id !== itemId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => {
        if (!isNaN(item.price) && !isNaN(item.quantity)) {
            return acc + item.price * item.quantity;
        }
        return acc;
    }, 0);



    return (

        <CartContext.Provider value={{ cart, setCart, addItemCart, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>

    )






}