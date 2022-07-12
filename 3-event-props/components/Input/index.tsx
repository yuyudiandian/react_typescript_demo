import React from 'react'

type InputProps = {
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props:InputProps) {
  return (
    <div>
        <input type="text" placeholder="请输入你想要输入的值" onChange={(e) => props.handleChange(e)}/>
    </div>
  )
}

export default Input