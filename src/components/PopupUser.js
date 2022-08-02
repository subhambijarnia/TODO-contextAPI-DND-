import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/context/TodoContext';
import './popup.scss'

function PopupUser(props) {
  // const [todo, setTodo] = useState({
  //   title: '',
  //   description: '',
  //   hr: 0,
  //   min: 0
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTodo({
  //     ...todo,
  //     [name]: value
  //   })
  // }

  const { dispatch } = useContext(TodoContext);

  return (
    (props.trigger) ? (
      <div className='popup'>
        <article className="article">
          <header style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', height: '36 px', width: '99%', justifyContent: 'space-between' }}>
            <div >Create User</div>
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
                name="User"
                placeholder="User"
              ></input>
            </label>
          </form>
        </article>
      </div>
    ) : ''
  )
}

export default PopupUser