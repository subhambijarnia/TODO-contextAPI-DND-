import initialItems from '../store'
import uuid from "react-uuid";
function TodoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const dataTodo = { id: uuid(), content: action.payload }
      const qwe = [...state.Todo.items];
      qwe.push(dataTodo);
      return {
        ...state,
        ['Todo']: {
          ...state.Todo,
          items: qwe
        },
      }

    case 'SOURCETODEST':
      const { source, destination } = action.payload;
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = state[source.droppableId];
        const destColumn = state[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        console.log('destination.droppableId', destination.droppableId);
        console.log('destColumn', destColumn);
        console.log('destItems', destItems);
        return {
          ...state,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        };
      } else {
        const column = state[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        return {
          ...state,
          [source.droppableId]: {
            ...column,
            items: copiedItems
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