import React, { useEffect, useState } from 'react'
import '../index.css'
import { AddCategory } from './AddCategory';

export const GiffApp = () => {

  const [category,setCategory ] = useState('');
  const [categories, setCategories] = useState([]);
  
  console.log(categories);

  useEffect(() => {
    if(category !== ''){
      getGiffs();
    }
  },[category])




  const getGiffs = () => {
    const url = new URL("https://api.giphy.com/v1/gifs/search");
    var params = {
      api_key: "za7As88APho69VcPk6t9PW2nrHzeSb60",
      limit: "10",
      q: `${category}`,
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url).then((resp) => {
      resp.json().then(({ data }) => {
        setCategories(data.map((x) => {
          return { id: x.id, title: x.title, img: x.images.downsized_large.url };
        }));
      });
    });
  };

    return (
      <div>
        GiffExpert
        <hr />
        <AddCategory
          setCategory={setCategory}
        />
        <ul>
          {categories.map((x)=>(<> <img src={x.img} /> </>))}
        </ul>
      </div>
    );
}
