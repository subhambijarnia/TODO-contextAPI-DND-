import React, { useContext } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoContext from '../contexts/context/TodoContext';
import './items.scss'

export function ItemList() {
  const { dispatch, TodoItems } = useContext(TodoContext);

  function OnDragEnd(result) {
    if (!result.destination) {
      return;
    }
    dispatch({ type: 'SOURCETODEST', payload: result })
  };

  return (
    <div className='nav' >
      <DragDropContext
        onDragEnd={result => OnDragEnd(result)}
      >
        {Object.entries(TodoItems).map(([columnsId, columns]) => {
          return (
            <div key={columnsId}>
              <h2 style={{ justifyContent: "center", textAlign: "center" }}>{columns.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnsId} key={columnsId} >
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightblue"
                          : "lightgrey",
                        padding: 4,
                        width: 250,
                        minHeight: 500
                      }}
                    >
                      {columns.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                padding: 16,
                                margin: "0 0 8px 0",
                                minHeight: "50px",
                                backgroundColor: snapshot.isDragging
                                  ? "#263B4A"
                                  : "#456C86",
                                color: "white",
                                ...provided.draggableProps.style
                              }}
                            >
                              <div style={{ fontSize: 'calc(10px + 1vmin)', fontWeight: 'bold' }}>
                                {item.content.title}
                              </div>
                              <div style={{ fontSize: 'calc(10px + 1vmin)' }}>
                                {item.content.description}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  );
}