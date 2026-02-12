import { useContext, useState } from "react";
import products from "../assets/Data.js";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <>
      <Toaster />

      <div className="w-full min-h-screen bg-[#fafafa] px-4 sm:px-6 md:px-10 py-6">


        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">All Products</h1>
            <p className="text-sm text-gray-500">Home &gt; Products</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="font-medium text-black">Relevance</span>
              <span>Newest First</span>
              <span>Popularity</span>
              <span>Price--Low to High</span>
              <span>Price--High to Low</span>
            </div>

            <button className="border px-4 py-2 rounded-full text-sm w-fit">
              Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="text-center">

              <div className="relative bg-white rounded-tl-[40%] rounded-br-[40%] shadow-md h-[280px] sm:h-[320px] md:h-[350px] p-8 flex items-center justify-center mb-4">

                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-4 right-4 text-xl z-10"
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
                  className="max-h-44 sm:max-h-52 md:max-h-56 object-contain"
                />
              </div>

              <h3 className="text-sm font-medium mb-2 px-2">
                {item.name}
              </h3>

              <div className="flex justify-center items-center gap-3 mb-4">
                <span className="font-semibold">Rs {item.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  Rs {item.oldPrice}
                </span>
              </div>

              <button
                className="w-full bg-[#0a3344] text-white py-3 rounded-md text-sm hover:bg-[#062635] transition"
                onClick={() => {
                  addToCart(item);
                  toast.success("Added to cart");
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-12">
          <button className="border-2 border-[#0a3344] text-[#0a3344] px-8 py-3 rounded-md text-sm font-medium hover:bg-[#0a3344] hover:text-white transition">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
