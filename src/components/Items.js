import React, { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoContext from '../contexts/context/TodoContext';
import './items.scss'


export function ItemList() {
  const { dispatch, TodoItems } = useContext(TodoContext);
  console.log(TodoItems);

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
        {Object.entries(TodoItems.toDoTasks).map(([columnsId, columns]) => {
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
                            <div className='todobox'
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                backgroundColor: snapshot.isDragging
                                  ? "#263B4A"
                                  : "#456C86",
                                color: "white",
                                ...provided.draggableProps.style
                              }}
                            >
                              <div className='title' >
                                {item.content.title}
                              </div>
                              <div>
                                {item.content.description}
                              </div>
                              <div className='time'>
                                <i className="fa fa-clock-o" />
                                {item.content.hr}hr
                                <div>
                                  {
                                    (item.TotalTime > 0)
                                      ?
                                      <div style={{ color: 'rgb(74, 255, 96)', fontWeight: 'bold' }}>
                                        Completed! {item.TotalTime}
                                      </div>
                                      :
                                      (item.TotalTime === 0)
                                        ?
                                        <div style={{ color: 'rgb(255, 74, 74)', fontWeight: 'bold' }}>
                                          not complete on time
                                        </div>
                                        :
                                        (item.TotalTime < 0)
                                          ?
                                          <div style={{ color: 'rgb(255, 74, 74)', fontWeight: 'bold' }}>
                                            take {item.TotalTime * -1} hours extra.
                                          </div>
                                          :
                                          ''
                                  }
                                </div>
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