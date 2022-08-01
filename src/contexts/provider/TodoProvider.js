import React, { useReducer } from 'react'
import TodoContext from '../context/TodoContext';
import TodoReducer from '../reducer/TodoReducer';

import initialItems from '../store'

function TodoProvider(props) {
  const [TodoItems, dispatch] = useReducer(TodoReducer, initialItems);
  const todoData = { TodoItems, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
}

export default TodoProvider