import { useState } from "react";

export const useFetch = () => {

    const [categories,setCategories] = useState([]);

    const url = new URL("https://api.giphy.com/v1/gifs/search");

    const getGiffs = (category) => {
    
      var params = {
      api_key: "za7As88APho69VcPk6t9PW2nrHzeSb60",
      limit: "12",
      q: `${category}`,
    };

    url.search = new URLSearchParams(params).toString();

    
      fetch(url).then((resp) => {
        resp.json().then(({ data }) => {
          setCategories(
            [
              data.map((x) => {
                return {
                  id: x.id,
                  title: x.title,
                  img: x.images.downsized_large.url,
                };
              }),
              ...categories,
            ].flat()
          );
        });
      });
    };

    return {categories,getGiffs};
  };