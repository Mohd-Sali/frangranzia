import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#9fc3c6] text-gray-900">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <h1 className="text-2xl font-bold">FragranZia</h1>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>Gifting</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy policy</li>
            <li>Terms and conditions</li>
            <li>FAQs</li>
            <li>Customer service</li>
          </ul>
        </div>

        
        <div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MdEmail />
              <span>frfurniture@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone />
              <span>+91 9876543210</span>
            </div>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Social Media</h3>
          <div className="flex gap-3">
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
            <FaPinterestP />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs gap-2">
          <p>
            Web Accessibility &nbsp;|&nbsp; Terms of Use &nbsp;|&nbsp; Privacy Statement &nbsp;|&nbsp; Contact Us
          </p>
          <p>© 2024 fragranZia Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
