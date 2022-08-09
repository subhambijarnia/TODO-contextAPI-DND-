import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TodoContext from '../../contexts/context/TodoContext';
import './userList.scss';

function UserList() {
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
          <tr key={user.id} >
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>
              <NavLink
                to={`/user/${user.id}`}
                key={user.id}
              >
                <i className="fa fa-eye" />
              </NavLink>
            </td>
          </tr>
        )
      })}
      <Outlet />
    </table>
  )
}


export default UserList