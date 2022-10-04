import ItemList from '../ItemList/ItemList';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/title';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';


export const ItemListContainer = ({texto}) => {
        
    const [data, setData] = useState ([]);
    const {categoriaId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(()=> {
      setIsLoading (true);
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'cakes');
     
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==' , categoriaId ))
      getDocs(queryFilter)
      .then (res => setData( res.docs.map(cakes => ({id: cakes.id, ...cakes.data()}))))
    } else{
      getDocs(queryCollection)
      .then (res => setData( res.docs.map(cakes => ({id: cakes.id, ...cakes.data()}))))
    }
    setTimeout (() => {
      setIsLoading (false);
    },1500);
    
    }, [categoriaId])

 
    return (
        <>
        <Title  greeting={texto}/>
        {isLoading ? <Spinner /> : <div className='itmList'> <ItemList data={data}/> </div>}
        </>
    );
}

export default ItemListContainer;