import React from 'react'
import TodoItems from './TodoItems'
function TodosList(props) {
  return (
    <div>
        <h2>What to do:</h2>
        {
            props.data.map((item,idx) => <TodoItems tododata={item} key={idx}/>)
        }
    </div>
  )
}

export default TodosList