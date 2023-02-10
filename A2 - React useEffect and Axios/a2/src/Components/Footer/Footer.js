import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [value, setValue] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(5);

  useEffect(() => {
    (async () => {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        )
        let data = await response.json();
        setValue(data);
    })();
  }, [page,limit]);

  return <div>

   {value.map(obj => (
    <p key={obj.id}>{obj.title}</p>
   ))}

    
  </div>;
};
