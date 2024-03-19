import React from 'react';
import './App.css';
import Inventory from './components/InventoryComponents/Inventory.js';

function App() {
  const products=[
    {pName:'Jars',pQuantity:"30",pType:"Raw"},
    {pName:'Lids',pQuantity:"30",pType:"Raw"},
    {pName:'Labels',pQuantity:"500",pType:"Raw"},
    {pName:'biscotti',pQuantity:"2",pType:"Flower"},
    {pName:'Hawiian',pQuantity:"4",pType:"Flower"},
    {pName:'P Haze',pQuantity:"5",pType:"Flower"}
  ]

  return (
    <div className="App">
      <Inventory inventory= {products}/>    
    </div>
  );
}

export default App;
