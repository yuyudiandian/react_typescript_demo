import React,{useState,useContext,createContext} from 'react'

//useContext可以帮助我们跨越组件层级直接传递变量，实现数据共享
const PersonContext = createContext({
  name:'', 
  age:0, 
  count:0
});
const Count = () => {
  const person = useContext(PersonContext);
  return <p>子组件获得的点击数量：{person.count}</p>;
};

function Counter() {
  // const [count,setCount] = useState(0)
  const [person,setPerson] = useState({
    name:'zy',
    count:10,
    age:22
  })
  return (
    <div>
      <p>父组件点击数量：{person.count}</p>
      <button onClick={()=>setPerson({count:person.count + 1,name:'12',age:person.age+1})}>点击</button>
      <PersonContext.Provider value={person}>
        <Count />
      </PersonContext.Provider>
    </div>
  )
}

export default Counter