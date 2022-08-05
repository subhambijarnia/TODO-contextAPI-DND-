import React, { useReducer } from 'react'
import UserContext from '../context/UserContext'
import initialUsers from '../store'
import uuid from 'react-uuid'

export function UserReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      const dataUser = { id: uuid(), content: action.payload }
      return [
        ...state, dataUser
      ]
  }
}

function UserProvider(props) {
  const [Users, dispatch] = useReducer(UserReducer, initialUsers);
  const userData = { Users, dispatch };
  console.log('userData----', userData);
  return <UserContext.Provider value={userData} {...props} />;
}

export default UserProvider