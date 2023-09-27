import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Logic for storing items into state
  useEffect(() => {
    let existingItems = localStorage.getItem("cart");
    if (existingItems) setCart(JSON.parse(existingItems));
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// creating custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
