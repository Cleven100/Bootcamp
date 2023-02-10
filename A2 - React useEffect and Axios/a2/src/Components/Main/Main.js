import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Main = () => {

    const [vetor, setVetor] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    useEffect(()=> {
        (() =>{
            axios.get(`https://jsonplaceholder.typicode.com/posts?_
            limit=${limit}&_page=${page}`)
            .then(response => {
                setVetor(response.data);
            })
            
        })()
    }, [])


  return (
    <div>

        {vetor.map(obj => (
            <p key={obj.id}> {obj.body}</p>
        ))}

    </div>
  )
}
