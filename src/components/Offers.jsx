import React from "react";
import perfume1 from "../assets/a1.png";
import perfume2 from "../assets/a2.png";
import perfume3 from "../assets/a3.png";

const offers = [
  {
    title: "Unlock Exclusive Offers",
    desc: "Discover special deals tailored just for you!",
    img: perfume1,
  },
  {
    title: "Gift a Scents to your loved one.",
    desc: "Make your love more beautiful",
    img: perfume2,
  },
  {
    title: "Luxury Scents",
    desc: "Starting at ₹4,000",
    img: perfume3,
    badge: "Shop Now",
  },
];

const OffersSection = () => {
  return (
    <div className="w-full px-4 md:px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] rounded-xl p-5 flex items-center justify-between hover:shadow-md transition"
          >
            
            <div className="space-y-2 max-w-[65%]">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {item.desc}
              </p>

              {item.badge && (
                <button className="mt-2 bg-[#1f4b5c] text-white text-xs px-3 py-1 rounded-full">
                  {item.badge}
                </button>
              )}
            </div>

            
            <img
              src={item.img}
              alt="perfume"
              className="w-16 sm:w-20 md:w-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
