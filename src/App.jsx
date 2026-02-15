import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ShopContextProvider from "./context/ShopContext";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CartContextProvider from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishlistContextProvider from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist";
import Admin from "./pages/Admin";
import AdminProducts from "./pages/AdminProducts";
import AdminCategories from "./pages/AdminCategories";
import AdminOffers from "./pages/AdminOffers";
import AdminCustomers from "./pages/AdminCustomers";
import AdminOrders from "./pages/AdminOrders";
import AdminLayout from "./components/AdminLayout";
import About from "./pages/About";

// Layout component for user-facing pages that includes Navbar and Footer
const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};


function App() {
  return (
    <WishlistContextProvider>
      <CartContextProvider>
        <ShopContextProvider>
          <BrowserRouter>
            <Routes>
              {/* User Routes with Navbar and Footer */}
              <Route path="/" element={<UserLayout><Home /></UserLayout>} />
              <Route path="/products" element={<UserLayout><Products /></UserLayout>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<UserLayout><Cart /></UserLayout>} />
              <Route path="/checkout" element={<UserLayout><Checkout /></UserLayout>} />
              <Route path="/wishlist" element={<UserLayout><Wishlist /></UserLayout>} />
              <Route path="/about" element={<UserLayout><About /></UserLayout>} />

              {/* Admin Routes with AdminLayout (Sidebar) */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Admin />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="offers" element={<AdminOffers />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="orders" element={<AdminOrders />} />
              </Route>

            </Routes>
          </BrowserRouter>
        </ShopContextProvider>
      </CartContextProvider>
    </WishlistContextProvider>
  );
}

export default App;
