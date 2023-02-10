import React, { useEffect, useState } from 'react'

export const Header = () => {
    const [vetor, setVetor] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
  
    useEffect(() => {
        (async () => { 
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
            let data = await res.json();
          setVetor(data);
        })();
      }, [page, limit]);
  
      return (
        <div>
          {vetor.map(obj => (
            <p key={obj.id}>{obj.title}</p>
          ))}
        </div>
      );
  };