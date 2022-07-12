import React from 'react'

interface greet {
    name:string,
    age:number,
    isLoggedIn:boolean
}

const Greet = (props:greet) => {
  return (
    <div>
      {
        props.isLoggedIn ? <h1>I'm {props.name},my age is {props.age}</h1> : <h1>Hello Guest!</h1>
      } 
    </div>
  )
}

export default Greet

