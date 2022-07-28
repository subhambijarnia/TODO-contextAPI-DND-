import uuid from "react-uuid";

const itemsFromBackend = [
  { id: uuid(), content: { title: "First task", description: "First task description" } },
  { id: uuid(), content: { title: "Second task", description: "Second task description" } },
  { id: uuid(), content: { title: "Third task", description: "Third task description" } },
  { id: uuid(), content: { title: "Fourth task", description: "Fourth task description" } },
  { id: uuid(), content: { title: "Fifth task", description: "Fifth task description" } }
];

const initialItems = {
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
};

export default initialItems;