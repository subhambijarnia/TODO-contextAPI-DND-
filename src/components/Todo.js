import React, { useState } from 'react'
import { ItemList } from './Items'
import Popup from './Popup'
import ResetItem from './ResetItem'

function Todo() {
  const [button, setButton] = useState(false)
  return (
    <>
      <header style={{
        background: '#282c349e',
        width: '100%',
        height: '36px',
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'center',
        position: 'fixed',
        color: '#FFF'
      }}>
        <button onClick={() => setButton(true)}
          style={{
            fontSize: 'calc(10px + 2vmin)',
            backgroundColor: '#09d3ac',
            padding: '4px 10px',
            border: 'none',
            alignItems: 'end',
            margin: '0 10px 0 0'
          }}>ADD TODO</button>
      </header>
      <ItemList />
      <ResetItem />
      <Popup trigger={button} setTrigger={setButton} ></Popup>
    </>
  )
}

export default Todo