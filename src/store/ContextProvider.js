import React, { useState, useEffect } from "react";
import Context from "./context";

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState({});
  const [newArrivals, setNewArrivals] = useState(null);
  const [handpicked, setHandpicked] = useState(null);
  const [product, setProduct] = useState(null);
  const [brands, setBrands] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(  !!localStorage.getItem('token') );
  
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
    product: product,
    setProduct: setProduct,
    brands: brands,
    setBrands: setBrands,
    relatedProducts: relatedProducts,
    setRelatedProducts: setRelatedProducts,
    categories: categories,
    setCategories: setCategories,
    categoryProducts: categoryProducts,
    setCategoryProducts:setCategoryProducts,
    isSignedIn:isSignedIn,
    setIsSignedIn:setIsSignedIn,
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

export default ContextProvider;
