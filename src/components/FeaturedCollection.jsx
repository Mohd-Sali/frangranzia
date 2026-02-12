import React, { useContext, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { CartContext } from "../context/CartContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const FeaturedProduct = () => {
  const { products } = useContext(ShopContext);
  const { addToCart } = useContext(CartContext);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-[#fafafa]">
      <Toaster />

      <div className="flex items-center justify-between mb-6">
        <h2 className="px-9 text-lg font-semibold text-black">
          Featured<span className="text-[#0E3A48]">Collections</span>
        </h2>

        <div className="flex gap-2">
          <button
            onClick={slideLeft}
            className="w-8 h-8 border-2 rounded-full flex items-center justify-center"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={slideRight}
            className="w-8 h-8 border-2 rounded-full flex items-center justify-center"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[260px] p-4"
          >
            <div className="relative bg-white rounded-tl-[40%] rounded-br-[40%] shadow-md h-[220px] p-11 flex items-center justify-center mb-4">
              <span className="absolute top-10 left-7 bg-[#0E3A48] text-white text-[11px] px-3 py-1 rounded-full">
                New
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="h-[160px] object-contain"
              />
            </div>

            <h3 className="text-sm font-medium line-clamp-2">
              {item.name}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {item.category}
            </p>

            <div className="mt-2">
              <span className="text-sm font-semibold">
                Rs {item.price}
              </span>
              {item.oldPrice && (
                <span className="text-xs text-gray-400 line-through ml-2">
                  Rs {item.oldPrice}
                </span>
              )}
            </div>

            <button
              className="mt-4 w-full bg-[#0E3A48] text-white text-sm py-2 rounded-md"
              onClick={() => {
                addToCart(item);
                toast.success("Added to cart 🛒");
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;




