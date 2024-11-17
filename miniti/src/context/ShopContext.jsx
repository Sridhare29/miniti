import React, { createContext } from "react";
import all_product from "../assets/all_product";

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
