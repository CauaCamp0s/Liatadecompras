import React, { useState } from 'react';
import { useShoppingList } from '../context/ShoppingListContext';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const { addItem } = useShoppingList();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() !== '') {
      addItem({ id: Date.now(), name: itemName });
      setItemName('');
    }
  };

  return (
    <div>
      <h2>Adicionar Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Nome do item"
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddItem;
