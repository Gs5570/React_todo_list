import React from 'react'

const Form = (props) => {
  return (

        <form onSubmit={props.handleSubmit}>
            <label htmlFor="text">text:</label>
            <input
                type="text"
                id="text"
                value={props.text}
                onChange={props.handleChange}
            />
            <label htmlFor="create">createdAt:</label>
            <input
                type="date"
                id="createdAt"
                value={props.createdAt}
                onChange={props.handleChange}
            />
            <label htmlFor="complete">isComplete:</label>
            <input
                type="checkbox"
                id="isComplete"/>
                {/* onChange={props.handleChange} */}
                {/* value={props.isComplete} */}
            <input type ="submit"/>
        </form>
    
  )
}

export default Form