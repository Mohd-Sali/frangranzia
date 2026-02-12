import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);
  const totalPrice = cartItems.reduce(
    (a, c) => a + c.price * c.qty,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        <div className="lg:col-span-2 space-y-6">
          {cartItems.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 border rounded-lg bg-white"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-28 h-40 sm:h-28 object-contain"
              />


              <div className="flex-1">
                <h2 className="font-semibold text-base sm:text-lg">
                  {item.name}
                </h2>


                <div className="flex items-center gap-2 sm:gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="border px-3 py-1 rounded"
                  >
                    −
                  </button>
                  <span className="font-medium">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="border px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>


                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-lg sm:text-xl font-bold">
                    Rs {item.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    Rs {item.oldPrice}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    61% off
                  </span>
                </div>


                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="border border-red-500 text-red-500 px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                  <button className="border px-4 py-2 rounded">
                    Share
                  </button>
                  <button className="bg-slate-800 text-white px-6 py-2 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="border rounded-lg p-4 sm:p-5 h-fit bg-white lg:sticky lg:top-24">
          <h2 className="font-semibold text-base sm:text-lg mb-4">
            Check Out
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Price ({totalItems} item)</span>
              <span>Rs {totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">Rs 0</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="text-green-600">Free</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-base sm:text-lg">
            <span>Total Amount</span>
            <span>Rs {totalPrice}</span>
          </div>

          <Link to="/checkout">
            <button className="w-full bg-slate-800 text-white py-3 rounded mt-5">
              Proceed to Buy
            </button>
          </Link>

          <p className="text-xs text-gray-500 text-center mt-3">
            Safe and Secure Payments. Easy returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
