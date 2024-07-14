'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [productss, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/product-page-${page}`, {
        cache: 'no-store',
      });
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

  const addItem = (product) => {
    const index = cartData.findIndex((item) => item.id === product.id);
    if (index === -1) {
      toast.success('Item Added', {
        position: 'top-center',
        autoClose: 2000,
      });
      setCartData([...cartData, product]);
    } else {
      toast.error('Item already in cart', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  const cartTotal = cartData.reduce((total, item) => {
    let prodTotal;
    prodTotal = item.available_quantity * item.current_price[0].USD[0];
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
        isModalOpen,
        openModal,
        closeModal,
        setIsFilterOpen,
        setCartData,
        setProducts,
        setLoading,
        fetchProducts,
        addItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
