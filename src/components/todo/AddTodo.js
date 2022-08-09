import React, { useContext, useState } from 'react'
import TodoContext from '../../contexts/context/TodoContext';
import '../popup.scss'
import Select from 'react-select'


function AddTodo(props) {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    hr: 0,
    userDetails: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    })
  }

  const handleUserSelect = (e) => {
    setTodo({
      ...todo,
      ['userDetails']: Array.isArray(e) ? e.map(x => x.value) : []
    })
  }

  const { dispatch, TodoItems } = useContext(TodoContext);

  const UserArray = [];
  Object.entries(TodoItems.users).forEach((user) => {
    UserArray.push({ label: user[1].name, value: user[1] })
  })

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
            <label>
              hours
              <input
                type="number"
                name="hr"
                placeholder="hours"
                value={todo.hr}
                onChange={handleChange}
              ></input>
            </label>
            <Select
              placeholder="Select Option"
              value={UserArray.filter(obj => todo.userDetails.includes(obj.value))}
              options={UserArray}
              isMulti
              isClearable
              onChange={handleUserSelect}
            />
            <button onClick={() => { dispatch({ type: 'ADD_TODO', payload: todo }); props.setTrigger(false) }}>Add</button>
          </form>
        </article>
      </div>
    ) : ''
  )
}

export default AddTodo