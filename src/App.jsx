import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/itemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Quienesomos from './Components/Pages/Quienesomos';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
          <Routes>
            <Route path ='/' element ={<ItemListContainer/> }/>
            <Route path ='/Quienesomos' element ={<Quienesomos/> }/>
            <Route path ='/Catalogo/:categoriaId' element ={<ItemListContainer/> }/>
            <Route path ='/Detalle/:detalleId' element ={<ItemDetailContainer/> }/>
            <Route path ='/cart' element ={<Cart/> }/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App
