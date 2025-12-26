import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Child2 = () => {
    const {user, setUser} = useContext(UserContext)
    const changeUserAge = ()=>{
        setUser(prev=>({...prev, age: prev.age +1}))
    }
  return (
    <div>
       <p>
        <span>User name : {user.name}</span> <br />
        <span>User age : {user.age}</span>
       </p>
        <button onClick={changeUserAge}>Change age 2</button>
    </div>
  )
}

export default Child2