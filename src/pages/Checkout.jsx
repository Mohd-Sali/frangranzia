// import { FaHome, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
// import product1 from "../assets/Product-1.png";


// const Checkout = () => {
//   return (
//     <div className="min-h-screen bg-[#f5f6f8] p-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">


//         <div className="lg:col-span-2 space-y-6">


//           <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
//             <img
//               src={product1}
//               alt="product"
//               className="w-24 h-28 object-contain"
//             />

//             <div className="flex-1">
//               <h3 className="font-semibold text-lg">
//                 Autograph eau de parfum 100ml for men
//               </h3>
//               <p className="text-sm text-gray-500 flex items-center gap-1">
//                 Autograph <span className="text-green-600 font-medium">4.5 ★</span>
//               </p>

//               <div className="flex items-center gap-4 mt-2">
//                 <div className="flex items-center border rounded">
//                   <button className="px-3 py-1">-</button>
//                   <span className="px-3">1</span>
//                   <button className="px-3 py-1">+</button>
//                 </div>

//                 <p className="text-lg font-semibold">
//                   Rs 899
//                   <span className="line-through text-sm text-gray-400 ml-2">
//                     Rs 2000
//                   </span>
//                   <span className="text-green-600 text-sm ml-2">61% off</span>
//                 </p>
//               </div>

//               <p className="text-sm text-gray-500 mt-1">
//                 Delivered by August 29, Free delivery
//               </p>
//               <p className="text-sm text-green-600">7 day return policy</p>
//             </div>
//           </div>


//           <div className="bg-white rounded-lg p-5 shadow-sm">
//             <h3 className="font-semibold mb-3">Personal Details</h3>

//             <div className="flex gap-3 mb-4">
//               <button className="px-4 py-2 border rounded text-sm">
//                 Add address +
//               </button>
//               <button className="px-4 py-2 rounded text-sm bg-[#0f2f3f] text-white flex items-center gap-2">
//                 <FaHome /> Home
//               </button>
//               <button className="px-4 py-2 border rounded text-sm flex items-center gap-2">
//                 <FaBuilding /> Office
//               </button>
//               <button className="px-4 py-2 border rounded text-sm flex items-center gap-2">
//                 <FaMapMarkerAlt /> Other
//               </button>
//             </div>


//             <div className="border rounded-lg p-4">
//               <p className="font-semibold">Rohan Jaison</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 Apartment No. 104, Emerald Heights Opposite Lulu Mall Edappally,
//                 Kochi Kerala 682024
//               </p>
//               <p className="text-sm mt-2">+91 9876543210</p>
//             </div>
//           </div>
//         </div>


//         <div className="space-y-6">


//           <div className="bg-white rounded-lg p-5 shadow-sm">
//             <h3 className="font-semibold mb-4">Price Details</h3>

//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span>Price (1 item)</span>
//                 <span>Rs 899</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Discount (61%)</span>
//                 <span className="text-green-600">- Rs 1101</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Delivery Charge</span>
//                 <span className="text-green-600">Free</span>
//               </div>

//               <hr />

//               <div className="flex justify-between font-semibold text-base">
//                 <span>Total Amount</span>
//                 <span>Rs 899</span>
//               </div>
//             </div>
//           </div>


//           <div className="bg-white rounded-lg p-5 shadow-sm">
//             <h3 className="font-semibold mb-4">Payment Methods</h3>

//             <div className="space-y-3 text-sm">
//               {[
//                 "Google Pay",
//                 "Cash on delivery (cash/UPI)",
//                 "Paytm / PhonePe / Amazon Pay",
//                 "Credit / Debit Card",
//                 "Net Banking",
//               ].map((method, index) => (
//                 <label
//                   key={index}
//                   className="flex items-center justify-between border rounded px-3 py-2 cursor-pointer"
//                 >
//                   <span>{method}</span>
//                   <input type="radio" name="payment" />
//                 </label>
//               ))}
//             </div>

//             <button className="w-full mt-5 bg-[#0f2f3f] text-white py-3 rounded font-semibold">
//               Pay Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaHome, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [payment, setPayment] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">


        <div className="lg:col-span-2 space-y-6">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-5 shadow-sm flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-28 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Quantity: {item.qty}
                </p>

                <p className="text-lg font-semibold mt-2">
                  Rs {item.price * item.qty}
                </p>
              </div>
            </div>
          ))}


          <div className="bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-3">Delivery Address</h3>

            <div className="flex gap-3 mb-4">
              <button className="px-4 py-2 bg-slate-800 text-white rounded flex items-center gap-2">
                <FaHome /> Home
              </button>
              <button className="px-4 py-2 border rounded flex items-center gap-2">
                <FaBuilding /> Office
              </button>
              <button className="px-4 py-2 border rounded flex items-center gap-2">
                <FaMapMarkerAlt /> Other
              </button>
            </div>

            <div className="border rounded-lg p-4 text-sm">
              <p className="font-semibold">Rohan Jaison</p>
              <p className="text-gray-600 mt-1">
                Apartment No.104, Emerald Heights, Edappally, Kochi, Kerala 682024
              </p>
              <p className="mt-2">+91 9876543210</p>
            </div>
          </div>
        </div>


        <div className="space-y-6">

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Price Details</h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Items</span>
              <span>Rs {totalPrice}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Delivery</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Rs {totalPrice}</span>
            </div>
          </div>


          <div className="bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Payment Method</h3>

            {[
              "Google Pay",
              "Cash on Delivery",
              "UPI / Wallets",
              "Card",
              "Net Banking",
            ].map(method => (
              <label
                key={method}
                className="flex justify-between items-center border rounded px-3 py-2 mb-2 cursor-pointer"
              >
                <span>{method}</span>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  onChange={(e) => setPayment(e.target.value)}
                  className="accent-slate-800"
                />
              </label>
            ))}

            <button
              disabled={!payment}
              className={`w-full mt-5 py-3 rounded font-semibold text-white
                ${payment ? "bg-slate-800" : "bg-gray-400 cursor-not-allowed"}`}
            >
              Pay Rs {totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
