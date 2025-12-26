import React from 'react'
import Child2 from './Child2'

const ElChild = ({user}) => {
  return (
    <div>ElChild
        <Child2 user={user}/>
    </div>
  )
}

export default ElChild