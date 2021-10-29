import React, { useState } from 'react'
import '../index.css'
import { AddCategory } from './AddCategory';
export const GiffApp = () => {
    const [category, setCategory] = useState({});
    const [categories, setCategories]= useState([])
        const onChangeCategory=(e)=>{
            const {target} = e;
            setCategory({...category,[target.id]:target.value});
        };
        console.log(categories)

        const addCategory=(e)=>{
            e.preventDefault();
            setCategories([...categories,category])
        }

    return (
      <div>
        GiffExpert
        <hr />
        <AddCategory />
        <form onSubmit={addCategory}>
        <div>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="placeholder"
            onChange={onChangeCategory}
          />
        </div>
        <div>
          <input
            type="text"
            id="category2"
            name="category2"
            placeholder="find your giff"
            onChange={onChangeCategory}
          />
        </div>
        <div>
            <input
            type="checkbox"
            id="age"
            name="age"
            onChange={onChangeCategory}
            />
        </div>
        <input type="submit" name="addbutton" value="Add" />
        </form>
        <ul>
          {
            // categories.map((x,i)=><li key={i}>{x}</li>)
          }
        </ul>
      </div>
    );
}
