import './App.scss';
import React, { useState } from "react";
import TodoProvider from './contexts/provider/TodoProvider';
import Todo from './components/todo/Todo';
import Users from './components/user/Users';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  const [page, setPage] = useState(0);
  return (
    <TodoProvider>
      <BrowserRouter>
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <div>
            <button onClick={() => setPage(0)}>Tasks</button>
            <button onClick={() => setPage(1)}>Users</button>
          </div>
        </header>
        <main className='main'>
          {/* {(page === 0) ? <Todo /> : <Users />} */}
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/todo" element={<Todo />} />
            <Route exact path="/user" element={<Users />} />
            {/* <Route path="/user"><Users/></Route> */}
          </Routes>
        </main>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
