import React, { useState } from "react";
import Context from "./context";

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

const contextData = {
  category: category,
  setCategory: setCategory,
  isLoading: isLoading,
  setIsLoading:setIsLoading,
};


  return (
    <Context.Provider
      value={{
        category: category,
        setCategory: setCategory,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
