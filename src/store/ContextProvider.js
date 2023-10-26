import React, { useState } from "react";
import Context from "./context";

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState({});
  const [newArrivals, setNewArrivals] = useState({});
  const [handpicked, setHandpicked] = useState({});
  const contextData = {
    category: category,
    setCategory: setCategory,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    products: products,
    setProducts: setProducts,
    newArrivals: newArrivals,
    setNewArrivals: setNewArrivals,
    handpicked: handpicked,
    setHandpicked: setHandpicked,
    
  };

  return (
    <Context.Provider
      value={contextData}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
