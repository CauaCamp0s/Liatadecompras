import React from 'react';
import { useShoppingList } from '../context/ShoppingListContext';

const ItemList = () => {
  const { items, removeItem } = useShoppingList();

  return (
    <div>
      <h2>Itens da Lista</h2>
      <ul>
        {items.length === 0 ? (
          <li>Não há itens na lista.</li>
        ) : (
          items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemList;
