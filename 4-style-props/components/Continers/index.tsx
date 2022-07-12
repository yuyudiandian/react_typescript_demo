import React from 'react'

type continerCssProps = {
    styleCss:React.CSSProperties
}

function Continer(props:continerCssProps) {
  return (
    <div style={props.styleCss}>
        hello,this is CssProps style demo!
    </div>
  )
}

export default Continer