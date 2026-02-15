import { useContext } from "react";
import products from "../assets/data";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isInWishlist = (id) =>
    wishlist.some((item) => item.id === id);

  return (
    <>
      <Toaster />

      <div className="w-full min-h-screen bg-[#fafafa] px-4 sm:px-6 md:px-10 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              All Products
            </h1>
            <p className="text-sm text-gray-500">
              Home &gt; Products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="text-center">
              <div className="relative bg-white rounded-tl-[40%] rounded-br-[40%] shadow-md h-[320px] p-8 flex items-center justify-center mb-4">
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-4 right-4 text-xl"
                >
                  {isInWishlist(item.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-400 hover:text-red-500" />
                  )}
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-56 object-contain"
                />
              </div>

              <h3 className="text-sm font-medium mb-2">
                {item.name}
              </h3>

              <div className="flex justify-center gap-3 mb-4">
                <span className="font-semibold">
                  Rs {item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  Rs {item.oldPrice}
                </span>
              </div>

              <button
                onClick={() => {
                  addToCart(item);
                  toast.success("Added to cart");
                }}
                className="w-full bg-[#0a3344] text-white py-3 rounded-md text-sm hover:bg-[#062635]"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
