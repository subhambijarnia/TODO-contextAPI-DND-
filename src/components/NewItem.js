import React, { useState, useContext } from 'react'
import TodoContext from '../contexts/context/TodoContext';

function NewItem() {
  const [text, setText] = useState(" ");
  const { dispatch } = useContext(TodoContext);
  return (
    <article className="Item">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button onClick={() => dispatch({ type: 'ADD_TODO', payload: text })}>Add</button>
    </article>
  )
}

export default NewItem