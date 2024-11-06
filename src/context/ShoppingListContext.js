import React, { createContext, useState, useContext } from 'react';

// Contexto para armazenar os itens da lista de compras
const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

// Hook para usar o contexto em qualquer componente
export const useShoppingList = () => {
  return useContext(ShoppingListContext);
};
