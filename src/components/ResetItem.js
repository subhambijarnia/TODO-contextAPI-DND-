import React, {useContext} from 'react'
import TodoContext from '../contexts/context/TodoContext'

function ResetItem() {
  const { dispatch } = useContext(TodoContext);

  return (
    <div className="Item">
      <button
        onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
    </div>
  )
}

export default ResetItem