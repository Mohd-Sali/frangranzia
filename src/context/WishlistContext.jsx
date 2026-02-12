import { createContext, useState } from "react";

export const WishlistContext = createContext(null);

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;