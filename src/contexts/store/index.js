import uuid from "react-uuid";

const itemsFromBackend = [
  { id: uuid(), content: { title: "First task", description: "First task description", hr: 5 } },
  { id: uuid(), content: { title: "Second task", description: "Second task description", hr: 5 } },
  { id: uuid(), content: { title: "Third task", description: "Third task description", hr: 5 } },
  { id: uuid(), content: { title: "Fourth task", description: "Fourth task description", hr: 5 } },
  { id: uuid(), content: { title: "Fifth task", description: "Fifth task description", hr: 5 } }
];

const initialItems = {
  toDoTasks: {
    ['Todo']: {
      name: "To do",
      items: itemsFromBackend
    },
    ['InProgress']: {
      name: "In Progress",
      items: []
    },
    ['Done']: {
      name: "Done",
      items: []
    }
  },
  users: [
    { id: uuid(), name: 'Admin' },
    { id: uuid(), name: 'User' }
  ]
};

export default initialItems;