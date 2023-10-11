import cartContext from "./cart-context";
import { useContext, useState } from "react";

export function useCartContext() {
  return useContext(cartContext);
}

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const addItemToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity++;
      setCartItems(updatedCartItems);
    }
    setCartTotalAmount(cartTotalAmount + +item.price);
  };

  const removeItemFromCart = (id) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const price = cartItems[itemIndex].price;
      if (cartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity--;
      } else {
        updatedCartItems[itemIndex].quantity--;
        updatedCartItems.splice(itemIndex, 1);
      }
      setCartItems(updatedCartItems);
      setCartTotalAmount(cartTotalAmount - price);
    }
  };

  const contextValue = {
    items: cartItems,
    totalAmount: cartTotalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
