import {
  MdDashboard,
  MdCategory,
  MdLocalOffer,
  MdPeople,
  MdShoppingCart,
} from "react-icons/md";
import { FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col justify-between fixed left-0 top-0 bottom-0 z-50">

      {/* Top Section */}
      <div>
        {/* Logo / Title */}
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-green-600">
            Dashtar
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 space-y-2">

          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            <FaBoxOpen size={20} />
            <span>Products</span>
          </NavLink>

          <NavLink
            to="/admin/categories"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "text-green-600 font-medium border-l-4 border-green-600 bg-green-50"
                : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            <MdCategory size={20} />
            <span>Categories</span>
          </NavLink>

          <NavLink
            to="/admin/offers"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            <MdLocalOffer size={20} />
            <span>Offers</span>
          </NavLink>

          <NavLink
            to="/admin/customers"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            <MdPeople size={20} />
            <span>Customers</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-green-600"
              }`
            }
          >
            <MdShoppingCart size={20} />
            <span>Orders</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
          <FaSignOutAlt />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

