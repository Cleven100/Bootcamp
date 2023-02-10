import React, { useEffect, useState } from 'react'

export const TesteTwo = () => {
 
    const [value, setValue] = useState([])
    const [quantity, setQuantity] = useState(100);
    const [page, setPage] = useState(1); 

    useEffect(()=> {
      (async () => {
            let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${quantity}&_page=${page}`)
            let data = await resposta.json();
            setValue(data);
      })()
    }, [value])



  return (
    <div>
   
    {value.map(obj => ( 
        <h1 className='iasdais' key={obj.id}>{obj.body}</h1>
    ))}

    </div>
  )
}
