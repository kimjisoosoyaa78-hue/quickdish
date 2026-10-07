import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [rest, setRest] = useState(null);
  const [items, setItems] = useState({});

  const add = (r, p) => {
    if (rest && rest.id !== r.id && Object.keys(items).length > 0) {
      Alert.alert('Cambiar de restaurante', 'Tu carrito tiene productos de ' + rest.nombre + '. ¿Quieres vaciarlo y empezar con ' + r.nombre + '?', [
        { text: 'No' },
        { text: 'Sí, cambiar', onPress: () => { setRest(r); setItems({ [p.id]: { p, q: 1 } }); } },
      ]);
      return;
    }
    setRest(r);
    setItems((prev) => ({ ...prev, [p.id]: { p, q: (prev[p.id] ? prev[p.id].q : 0) + 1 } }));
  };

  const remove = (p) =>
    setItems((prev) => {
      const q = (prev[p.id] ? prev[p.id].q : 0) - 1;
      const n = { ...prev };
      if (q <= 0) delete n[p.id]; else n[p.id] = { p, q };
      return n;
    });

  const clear = () => { setItems({}); setRest(null); };

  const list = Object.values(items);
  const count = list.reduce((a, x) => a + x.q, 0);
  const subtotal = list.reduce((a, x) => a + x.q * x.p.precio, 0);
  const envio = subtotal === 0 ? 0 : subtotal >= 20000 ? 0 : 3000; // envío gratis desde $20.000 (cupón del diseño)
  const qty = (id) => (items[id] ? items[id].q : 0);

  return (
    <CartContext.Provider value={{ rest, list, count, subtotal, envio, total: subtotal + envio, add, remove, clear, qty }}>
      {children}
    </CartContext.Provider>
  );
}
