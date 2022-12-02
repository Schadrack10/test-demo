import React from 'react'
import {useState} from 'react'
import Output from './Output'




const Greetings = ()=>{

 const [changeText , setChangeText] = useState(false)


  const changeTextHandler = ()=>{
       setChangeText(true)
  }


  return (

       <div>
           <h1>hello world</h1>
             { !changeText && <Output>its Good to see you </Output>}
             {changeText &&  <Output> 'Changed!' </Output>}
             <button onClick={changeTextHandler}>change text </button>
            
       </div>
  	)

}



export default Greetings