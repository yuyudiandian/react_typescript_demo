import React from 'react'

type eventProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function Button(props:eventProps) {

  return (
    <div>
        <button onClick={(e) => props.handleClick(e,12)}>点击我打印信息</button>
    </div>
  )
}

export default Button