import React from 'react'
/** Return each element of todosData */
const TodoItems = (props) => {

    const{text,createdAt,isComplete} = props.tododata
    console.log(props.tododata);

  return (
    <div>
        <h3>{text}</h3>
        <h4>{createdAt}</h4>
        <p>{isComplete}</p>
    </div>
  )
}

export default TodoItems