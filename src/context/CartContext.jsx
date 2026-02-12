import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };


  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };


  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

