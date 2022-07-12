import React,{useState} from 'react'

type AuthUser = {
    name:string,
    email:string
}

function User() {
    //这样声明，user可能为null，所以后面需要使用user？
    const [user,setUser] = useState<AuthUser | null>(null)
    //也可以用断言声明，这样就不需要user？
    // const [user,setUser] = useState<AuthUser>({} as AuthUser)

    const handleLoginIn = () => {
        setUser({
            name:'张三',
            email:'77777777@qq.com'
        })
    }

    const handleLoginOut = () => {
        setUser(null)
    }
     
  return (
    <div>
        <button onClick={handleLoginIn}>LoginIn</button>
        <button onClick={handleLoginOut}>LoginOut</button>
        <div>User name is:{user?.name}</div>
        <div>User email is:{user?.email}</div>

        {/* <div>User name is:{user.name}</div>
        <div>User email is:{user.email}</div> */}
    </div>
  )
}

export default User