import './App.scss';
import React, { useState } from "react";
import { ItemList } from './components/Items';
import TodoProvider from './contexts/provider/TodoProvider';
import ResetItem from './components/ResetItem';
import Popup from './components/Popup';

function App() {
  const [button, setButton] = useState(false)
  return (
    <TodoProvider>
      <header className="App-header">
        <h2>🚀 ToDo App</h2>
        <button onClick={() => setButton(true)}>ADD TODO</button>
      </header>
      <main className='main'>
        <ItemList />
        <ResetItem />
      </main>
      <Popup trigger={button} setTrigger={setButton} ></Popup>
    </TodoProvider>
  );
}

export default App;
