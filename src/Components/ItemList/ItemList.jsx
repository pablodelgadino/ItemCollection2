import Item from '../Item/Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return ( 
        data.map(cakes => <Item key={cakes.id} info={cakes}/>)
    );
}

export default ItemList;