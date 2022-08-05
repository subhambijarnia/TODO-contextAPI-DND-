import React from 'react'
import './header.scss'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h2>🚀 ToDo App</h2>
      <div>
        <BrowserRouter>
          <Link to="/todo">Tasks</Link>
          <Link to="/user">Users</Link>
        </BrowserRouter>
      </div>
    </header>
  )
}

export default Header