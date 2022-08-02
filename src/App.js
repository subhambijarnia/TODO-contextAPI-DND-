import './App.scss';
import React, { useState } from "react";
import TodoProvider from './contexts/provider/TodoProvider';
import Todo from './components/Todo';
import Users from './components/Users';

function App() {
  const [page, setPage] = useState(0);
  return (
    <TodoProvider>
      <header className="App-header">
        <h2>🚀 ToDo App</h2>
        <div>
          <button onClick={() => setPage(0)}>Tasks</button>
          <button onClick={() => setPage(1)}>Users</button>
        </div>
      </header>
      <main className='main'>
        {(page === 0) ? <Todo /> : <Users />}
      </main>
    </TodoProvider>
  );
}

export default App;
