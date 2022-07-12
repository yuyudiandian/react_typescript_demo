import React,{useState} from 'react'

type continerCssProps = {
    styleCss:React.CSSProperties
}

function Continer(props:continerCssProps) {
    const [isLogin,setIsLogin] = useState(false)
  return (
    <div style={props.styleCss}>
        hello,this is CssProps style demo!
        <br />
        <button onClick={() => setIsLogin(!isLogin)}>改变登陆状态</button>
        <h1>现在状态是：{
                isLogin?'已经登陆':'没有登陆'
            }
        </h1>
    </div>
  )
}

export default Continer