import React, { useContext } from 'react';
import TodoContext from '../contexts/context/TodoContext';
import './userList.scss'

// console.log('initialUsers', initialUsers[0].details)

function UserList() {
  const { TodoItems } = useContext(TodoContext);
  console.log('TodoItems', TodoItems.users);
  return (
    <div className='usernav' >
      {TodoItems.users.map(user => {
        return (
          <div className='userBox'>
            {user.name}
          </div>
        )
      })}
    </div>
  )
}


export default UserList