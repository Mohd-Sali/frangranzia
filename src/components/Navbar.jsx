import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setShowCart, cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);


  const totalQty = cartItems.reduce(

    (acc, item) => acc + item.qty, 0

  );

  return (
    <>

      <nav className="w-full bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">


            <Link to="/" className="text-lg font-semibold text-[#0E3A48]">
              Fragranzia
            </Link>


            <div className="hidden md:flex items-center ml-50 center gap-8 text-sm text-gray-700">
              <Link className="hover:text-[#0E3A48]" to="/">Home</Link>
              <Link className="hover:text-[#0E3A48]" to="/products">Products</Link>
              <Link className="hover:text-[#0E3A48]" to="/gifting">Gifting</Link>
              <Link className="hover:text-[#0E3A48]" to="/about">About</Link>
            </div>


            <div className="flex items-center gap-4">


              {/* <div className="hidden md:flex items-center border rounded-md px-3 py-1">
                <FiSearch size={14} className="text-gray-400" />
                <input type="text" placeholder="Search Here" className="outline-none text-sm px-2 w-36"/>
              </div> */}

              <div className="flex items-center border rounded-md px-3 py-1 w-32 sm:w-44 md:w-60">
                <FiSearch size={14} className="text-gray-400" />
                <input type="text" placeholder="Search" className="outline-none text-sm px-2 w-full bg-transparent" />
              </div>


              <Link to="/cart" onClick={() => setShowCart(true)} className="relative text-gray-700 hover:text-[#0E3A48]">
                <FiShoppingCart size={18} />
                {totalQty > 0 && (
                  <span className="absolute -top-2 -right-2 text-[10px] bg-[#0E3A48] text-white rounded-full px-1.5">
                    {totalQty}
                  </span>
                )}
              </Link>



              <Link to="/wishlist" className="relative text-gray-700 hover:text-[#0E3A48]">
                <FiHeart size={18} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-[10px] bg-[#0E3A48] text-white rounded-full px-1.5">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link to="/login" className="hidden md:block text-gray-700 hover:text-[#0E3A48]">
                <FiUser size={18} />
              </Link>


              <button onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-700">
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>

            </div>
          </div>
        </div>


        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm">
            <Link onClick={() => setMenuOpen(false)} to="/" className="block">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/products" className="block">Products</Link>
            <Link onClick={() => setMenuOpen(false)} to="/gifting" className="block">Gifting</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" className="block">About</Link>
            <Link onClick={() => setMenuOpen(false)} to="/login" className="block">Login</Link>
          </div>
        )}
        <div className="w-full bg-[#0E3A48] text-white text-xs text-center py-2 ">
          ENJOY FESTIVE DISCOUNTS! FREE SHIPPING ABOVE ₹999
        </div>
      </nav>

    </>
  );
};

export default Navbar;





