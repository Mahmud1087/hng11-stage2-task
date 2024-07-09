'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const cartTotal = cartData.reduce((total, item) => {
    let prodTotal;
    prodTotal = item.amount * item.price;
    total += prodTotal;
    return total;
  }, 0);

  return (
    <AppContext.Provider
      value={{
        cartData,
        isFilterOpen,
        setIsFilterOpen,
        setCartData,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
