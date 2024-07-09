'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [cartData, setCartData] = useState([]);

  const cartTotal = cartData.reduce((total, item) => {
    let prodTotal;
    prodTotal = item.amount * item.price;
    total += prodTotal;
    return total;
  }, 0);

  return (
    <AppContext.Provider value={{ cartData, setCartData, cartTotal }}>
      {children}
    </AppContext.Provider>
  );
}
