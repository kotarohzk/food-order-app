import { createContext } from "react";

// 45 words limit for desc

const itemsContext = createContext({
  itemsData: [],
  switchPage: null,
  addNewItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id) => {},
  togglePage: () => {},
});

export default itemsContext;
