import initialItems from '../store'
import uuid from "react-uuid";

function TodoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const dataTodo = { id: uuid(), content: action.payload }
      const itemsForUpdate = [...state.toDoTasks.Todo.items];
      itemsForUpdate.push(dataTodo);
      return {
        ...state, toDoTasks: {
          ...state.toDoTasks,
          ['Todo']: {
            ...state.toDoTasks.Todo,
            items: itemsForUpdate
          }
        }
      }
    case 'ADD_USER':
      return {
        ...state, users: [
          ...state.users, {id:uuid(), name:action.payload.name}
        ]
      }

    case 'SOURCETODEST':
      const { source, destination } = action.payload;
      if (source.droppableId !== destination.droppableId) {
        if (source.droppableId === 'Todo' && destination.droppableId === 'InProgress') {
          let startDate = new Date();
          console.log('state', state.toDoTasks);
          const sourceColumn = state.toDoTasks[source.droppableId];
          const destColumn = state.toDoTasks[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          const removedWIthDate = { ...removed, 'startDate': startDate }
          destItems.splice(destination.index, 0, removedWIthDate);
          return {
            ...state, toDoTasks: {
              ...state.toDoTasks,
              [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
              },
              [destination.droppableId]: {
                ...destColumn,
                items: destItems
              }
            }
          };
        } else if (source.droppableId === 'InProgress' && destination.droppableId === 'Done') {
          const sourceColumn = state.toDoTasks[source.droppableId];
          const destColumn = state.toDoTasks[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          // -- count the time to complete task 
          const startTime = removed['startDate'];
          const assignTime = (removed['content'].hr);
          // getTime(startTime, assignTime);
          const toTime = new Date();
          const fromTime = new Date(startTime);
          const differenceTravel = toTime.getTime() - fromTime.getTime();
          const hr = Math.floor((((differenceTravel) / (1000)) / 60) / 60);
          const assignMin = assignTime;
          const totalTime = Math.floor((assignMin - hr));
          alert('time to complete : ' + hr + ' hr, remaining hours : ' + totalTime + ' hr.');
          const removedTotalTime = { ...removed, 'TotalTime': totalTime }
          // --
          destItems.splice(destination.index, 0, removedTotalTime);
          console.log('destItems ', destItems);
          return {
            ...state, toDoTasks: {
              ...state.toDoTasks,
              [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
              },
              [destination.droppableId]: {
                ...destColumn,
                items: destItems
              }
            }
          };
        } else {
          return {
            ...state
          };
        }
      } else {
        const column = state.toDoTasks[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        return {
          ...state, toDoTasks: {
            ...state.toDoTasks,
            [source.droppableId]: {
              ...column,
              items: copiedItems
            }
          }
        };
      }

    case 'reset':
      return initialItems;
    default:
      return state;
  }
}

export default TodoReducer