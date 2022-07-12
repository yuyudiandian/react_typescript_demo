import React from 'react'

interface personProps {
    name:{
        firstName:string,
        lastName:string
    }
}

const Person = (props:personProps) => {
  return (
    <div>I'm {props.name.firstName} {props.name.lastName}</div>
  )
}

export default Person