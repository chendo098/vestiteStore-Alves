import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        // console.log(cart)
    }, [cart])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya está en el carrito');
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    }

    const deleteAll = () => {
        setCart([])
    }

    return (
         <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider