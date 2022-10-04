import React, {useEffect, useState} from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/itemDetail';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';



    
export const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {detalleId} = useParams();


    useEffect(() => {
        setIsLoading (true);
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'cakes', detalleId)
        getDoc(queryDoc)
        .then( res => setData({id: res.id, ...res.data()}) )

        setTimeout (() => {
            setIsLoading (false);
          },1500);

    }, [detalleId])


    return (
    <>
    {isLoading ? <Spinner /> : <ItemDetail data={data} />}
    </>
    );
}

export default ItemDetailContainer;