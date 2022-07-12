import React from 'react'
type childProps = {
    children:React.ReactNode
}
const Father = (props:childProps) => {
  return (
    <div>
        我是Father组件
        <hr />
        {props.children}
    </div>
  )
}

export default Father