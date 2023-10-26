import React from "react";

const Context = React.createContext({
  category: "",
  setCategory: "",
  isLoading: "",
  setIsLoading: "",
  products: "",
  setProducts: "",
  newArrivals: "",
  setNewArrivals: "",
  handpicked: "",
  setHandpicked: "",
});

export default Context;
