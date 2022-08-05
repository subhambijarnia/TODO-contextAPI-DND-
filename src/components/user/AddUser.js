import React, { useContext, useState } from 'react'
import TodoContext from '../../contexts/context/TodoContext';
import '../popup.scss'

function AddUser(props) {
  const [user, setUser] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setUser({
      name: value
    })
  }

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
              Name
              <input
                type="text"
                name="name"
                placeholder="name"
                value={user.name}
                onChange={handleChange}
              ></input>
            </label>
            <button onClick={() => { dispatch({ type: 'ADD_USER', payload: user }); props.setTrigger(false) }}>Add</button>
          </form>
        </article>
      </div>
    ) : ''
  )
}

export default AddUser