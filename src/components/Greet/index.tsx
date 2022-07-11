import React from 'react'

type greet = {
    name:string
}

const Greet = (props:greet) => {
  return (
    <div>
          <h1>{props.name}</h1>
    </div>
  )
}

export default Greet

