import './App.scss';
import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import TodoProvider from './contexts/provider/TodoProvider';
import Todo from './components/todo/Todo';
import Users from './components/user/Users';
import AssignTask from './components/user/AssignTask';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <div>
            <Link to="/todo">Tasks</Link>
            <Link to="/user">Users</Link>
          </div>
        </header>
        {/* <Outlet /> */}

        <main className='main'>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route exact path="/todo" element={<Todo />} />
            <Route exact path="/user" element={<Users />} />
            <Route path="/user/:userId" element={<AssignTask />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
