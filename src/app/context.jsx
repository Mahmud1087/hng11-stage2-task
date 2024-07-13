'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [productss, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        cartTotal,
        productss,
        isLoading,
        setIsFilterOpen,
        setCartData,
        setProducts,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
