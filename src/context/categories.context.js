import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop.data";
import { getCategoriesAndDocuments } from "../utilities/firebase.utility";
export const CategoriesContext = createContext({
  categories:{}
});

export const CategoriesProvider = ({ children }) => {
   const [categories, setcategories] = useState({});
   useEffect(() => {
      const getCategoryMap = async () => {
         const categories = await getCategoriesAndDocuments()
         setcategories(categories)
      };
      getCategoryMap()
      
   },[])
  const value = { categories};
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
