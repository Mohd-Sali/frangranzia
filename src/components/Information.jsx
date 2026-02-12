import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdOutlineSupportAgent } from "react-icons/md";

const Information = () => {
  return (
    <div className="w-full bg-white px-4 md:px-10 py-6">
      <div className="bg-white rounded-xl shadow-md">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center px-6 py-5 gap-6">

          
          <div className="flex items-center gap-4">
            <TbTruckDelivery className="w-8 h-8 text-[#0E3A48]" />
            <div>
              <h5 className="text-sm font-semibold text-[#0E3A48]">
                Fast & Reliable Delivery
              </h5>
              <p className="text-xs text-gray-600">
                Get your orders delivered on time, every time.
              </p>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <MdOutlineSecurity className="w-8 h-8 text-[#0E3A48]" />
            <div>
              <h5 className="text-sm font-semibold text-[#0E3A48]">
                Secure Payments
              </h5>
              <p className="text-xs text-gray-600">
                Shop with confidence using our encrypted payment gateways.
              </p>
            </div>
          </div>

         
          <div className="flex items-center gap-4">
            <MdOutlineSupportAgent className="w-8 h-8 text-[#0E3A48]" />
            <div>
              <h5 className="text-sm font-semibold text-[#0E3A48]">
                24/7 Customer Support
              </h5>
              <p className="text-xs text-gray-600">
                We're here to assist you anytime, anywhere.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Information;

