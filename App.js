import React, { useState, useEffect } from 'react';
import { ShoppingListProvider } from './context/ShoppingListContext';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <ShoppingListProvider>
      <div className="App">
        <h1>Lista de Compras</h1>
        <AddItem />
        <ItemList />
      </div>
    </ShoppingListProvider>
  );
};

export default App;
