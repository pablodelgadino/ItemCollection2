import './Item.css';
import { Link } from 'react-router-dom'
import React from 'react';

const Item = ({info}) =>{;
    
return (
    <Link to={`/detalle/${info.id}`} className='card cakes col-3'>
        <img src={info.img}  alt=""  className='card-img-top'/>
        <h1>{info.title}</h1>
        <h2>$ {info.price}</h2>
    </Link>
    );
}
export default Item;