import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[60vh]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Wishlist</h1>
        <span className="text-gray-500">{wishlist.length} Items</span>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-xl text-gray-600 mb-6">Your wishlist is empty</p>
          <Link
            to="/products"
            className="inline-block bg-[#0E3A48] text-white px-8 py-3 rounded-md hover:bg-[#082832] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex flex-col relative"
            >
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors z-10"
                title="Remove from wishlist"
              >
                <FaTrash size={14} />
              </button>

              <div className="relative aspect-square mb-4 bg-gray-50 rounded-md overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-medium text-gray-800 mb-1 line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold text-[#0E3A48]">
                    Rs {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      Rs {item.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => {
                      addToCart(item);
                      toast.success("Added to cart");
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#0E3A48] text-white py-2.5 rounded-md hover:bg-[#082832] transition-colors text-sm font-medium"
                  >
                    <FaShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
