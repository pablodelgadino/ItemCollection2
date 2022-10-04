import React, {useState, useContext} from 'react'
const CartContext = React.createContext ([]);
export const useCartContext = () => useContext (CartContext);

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }
    const removeItem = (id) => setCart (cart.filter(product => product.id !== id));
    const clear = () => setCart ([]);
    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
    const totalProducts= () => cart.reduce ((accumulator, actualProduct) => accumulator + actualProduct.quantity,0);
    const totalPrice = () => {
        return cart.reduce ((prev,act) => prev + act.quantity * act.price, 0);
    }   

    return(
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear, 
            isInCart,
            totalProducts,
            totalPrice,
            cart, 
        }}> 
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider