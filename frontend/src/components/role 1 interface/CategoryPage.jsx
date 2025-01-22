
import React from "react";
import  { useEffect, useState } from "react";
import { Category } from "../role 2 interface/src";
const CategoryPage = () => {
   const [CategoryItems, setCategoryItems] = useState([]);
   useEffect(() => {
       Category()
         .then((response) => setCategoryItems(response.data))
         .catch((error) => console.error("Error fetching Category:", error));
     }, []);
      return (
    <div>
      <h1>Category</h1>
      
        <ul>
          {CategoryItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      
    </div>
  );
};

export default CategoryPage;
