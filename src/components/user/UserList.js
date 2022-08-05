import React, { useContext, useState } from 'react';
import TodoContext from '../../contexts/context/TodoContext';
import './userList.scss'

function UserList() {
  // const [button, serButton] = useState(false);
  const { TodoItems } = useContext(TodoContext);
  return (
    <table className='usernav'>
      <tr>
        <th>no</th>
        <th>name</th>
        <th>look</th>
      </tr>
      {TodoItems.users.map((user, i) => {
        return (
          <tr key={i} >
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td><i className="fa fa-eye" /></td>
          </tr>
        )
      })}
    </table>
  )
}


export default UserList