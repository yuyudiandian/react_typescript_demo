import React,{useReducer} from 'react'

type CounterState = {
  count:number
}

type UpdateAction = {
  type:"increment"|"decrement",
  payload:number
}

type SetAction = {
  type:"reset",
}

type CounterAction = UpdateAction | SetAction

const initialState = {
  count: 0
}

function reducer(state:CounterState,action:CounterAction){
  switch(action.type){
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({type:'increment',payload:1})}>点击+1</button>
      <button onClick={() => dispatch({type:'decrement',payload:1})}>点击-1</button>
      <button onClick={() => dispatch({type:'reset'})}>重置为0</button>
    </div>
  )
}

export default Counter