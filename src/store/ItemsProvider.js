import itemsContext from "./items-context";
import { useContext, useEffect, useReducer, useState } from "react";

export function useItemsContext() {
  return useContext(itemsContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "initialize":
      return { ...state, itemsData: action.payload };
    case "setSwitchPage":
      return { ...state, switchPage: !state.switchPage };
    case "addItem":
      return { ...state, itemsData: [...state.itemsData, action.payload] };
    case "removeItem":
      const updatedItems = state.itemsData.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, itemsData: updatedItems };
    case "updateItem":
      const itemIndex = state.itemsData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        return state;
      }
      const newItems = [...state.itemsData];
      newItems[itemIndex] = {
        ...state.itemsData[itemIndex],
        ...action.payload.changes,
      };
      return newItems;
    default:
      return state;
  }
}

export default function ItemsProvider({ children }) {
  //   const [switchPage, toggleSwitchPage] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    switchPage: false,
    itemsData: JSON.parse(localStorage.getItem("itemsData")) || [],
  });

  const [formFields, setFormFields] = useState({
    name: "",
    desc: "",
    price: "",
  });

  // Function to load items from local storage
  const loadItemsFromLocalStorage = () => {
    const itemsData = JSON.parse(localStorage.getItem("itemsData")) || [];
    dispatch({ type: "initialize", payload: itemsData });
  };

  // Load items from local storage on component mount
  useEffect(() => {
    loadItemsFromLocalStorage();
  }, []);

  // Save items to local storage whenever itemsData changes
  useEffect(() => {
    localStorage.setItem("itemsData", JSON.stringify(state.itemsData));
  }, [state.itemsData]);

  const handleFormUpdates = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const contextValue = {
    itemsData: state.itemsData,
    addNewItem: (item) => {
      dispatch({ type: "addItem", payload: item });
    },
    removeItem: (id) => {
      dispatch({ type: "removeItem", payload: id });
    },
    updateItem: (id) => {
      dispatch({
        type: "updateItem",
        payload: { id: id, changes: formFields },
      });
    },
    togglePage: () => {
      dispatch({ type: "setSwitchPage" });
    },
    handleForm: handleFormUpdates,
    formFields: formFields,
  };

  return (
    <itemsContext.Provider value={contextValue}>
      {children}
    </itemsContext.Provider>
  );
}
