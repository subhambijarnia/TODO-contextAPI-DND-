import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/context/TodoContext';
import './popup.scss'

function Popup(props) {
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    })
  }

  // const submitButton = () => {
  //   alert(JSON.stringify(todo))
  // }
  // const [description, setDescription] = useState(" ");
  const { dispatch } = useContext(TodoContext);

  return (
    (props.trigger) ? (
      <div className='popup'>
        <article className="article">
          <header style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', height: '36 px', width: '99%', justifyContent: 'space-between' }}>
            <div >Create Task</div>
            <button style={{ background: 'transparent' }} onClick={() => props.setTrigger(false)}>X</button>
          </header>
          <form style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <label>
              Title
              <input
                type="text"
                name="title"
                placeholder="title"
                value={todo.title}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Description
              <input
                type="text"
                name="description"
                placeholder="description"
                value={todo.description}
                onChange={handleChange}
              ></input>
            </label>
            <button onClick={() => { dispatch({ type: 'ADD_TODO', payload: todo }); props.setTrigger(false) }}>Add</button>
            {/* <button onClick={submitButton}>Add</button> */}
          </form>
        </article>
      </div>

    ) : ''
  )
}

export default Popup