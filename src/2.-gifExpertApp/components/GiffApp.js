import React, { useEffect, useState } from "react";
import "./index.css";
import { AddCategory } from "./AddCategory";
import { ListOfGiffs } from "./ListOfGiffs";
import {useFetch} from '../api/useFetch';

export const GiffApp = () => {
  
  const [category, setCategory] = useState("");
  const {categories,getGiffs} = useFetch(category);

  useEffect(() => {
    if (category !== "") {
      getGiffs(category)
    }
  }, [category]);

  return (
    <div>
      <h1>GiffExpert</h1> 
      <hr />
      <AddCategory setCategory={setCategory} />
      <ListOfGiffs categories={categories}/>
    </div>
  );
};
