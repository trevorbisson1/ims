import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Inventory from './components/InventoryComponents/Inventory.js';
import Landing from './components/Landing/Landing.js';
import Navigation from './components/Navigation/Navigvation.js';
import AddIngredientForm from './components/AddComponents/AddIngredientForm.js';
import AddProductForm from './components/AddComponents/AddProductForm.js';

function App() {
  const products=[
    {pName:'Jars',pQuantity:"30",pType:"Raw"},
    {pName:'Lids',pQuantity:"30",pType:"Raw"},
    {pName:'Labels',pQuantity:"500",pType:"Raw"},
    {pName:'biscotti',pQuantity:"2",pType:"Flower"},
    {pName:'Hawiian',pQuantity:"4",pType:"Flower"},
    {pName:'P Haze',pQuantity:"5",pType:"Flower"}
  ]
//<Inventory inventory= {products}/>

  return (
    <div className="App">
         <Navigation/>
        
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Inventory' element={<Inventory inventory={products}/>}/>
            <Route path='/AddProduct' element={<AddProductForm/>}/>
            <Route path='/AddIngredient' element={<AddIngredientForm/>}/>
        </Routes>    
    </div>
  );
}

export default App;
