import React from "react";
import { useCartContext } from "../../context/CartContext";
import './itemCart.css';

const ItemCart = ({product}) => {
const { removeItem} = useCartContext();


    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.title}/>
            <div>
                <p className="pCart">Producto: {product.title} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio: {product.price} </p>
                <p>Subtotal: ${product.quantity * product.price} </p>
                <button className="btn btn-secondary" onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart