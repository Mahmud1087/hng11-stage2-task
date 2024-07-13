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

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/product-page-${page}`);
      const data = await response.json();
      setProducts(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts(3);
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
        fetchProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
