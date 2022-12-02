import React from 'react'
import {useEffect ,useState} from 'react'




const Async = () =>{

  const [posts , setPosts] =  useState()

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setPosts(json))
},[])



    return(

     <ul>
        {posts.map(li =>(
           <>

           </>
         ))}
     </ul>

  )
 }



export default Async