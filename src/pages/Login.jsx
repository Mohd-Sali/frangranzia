import { Link } from "react-router-dom";
import loginImg from "../assets/login.jpg"; 

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl  overflow-hidden grid grid-cols-1 md:grid-cols-2">

        
        <div className="relative  hidden md:block">
          <img
            src={loginImg}
            alt="Login"
            className="w-full rounded-tl-[40%] rounded-br-[40%] h-full object-cover"
          />
          <div className="absolute rounded-tl-[40%] rounded-br-[40%] inset-0 bg-black/50 flex flex-col justify-center px-10 ">
            <h2 className="text-3xl text-center font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className=" w-[300px] ml-15 text-center text-gray-200">
              Glad to see you again! Access your account to explore more
            </p>
          </div>
        </div>

        
        <div className="p-8 md:p-12 flex flex-col justify-center">
          
          
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5" />
              Facebook
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-1" />
            <span className="px-3 text-sm text-gray-400">
              Or sign in with email
            </span>
            <hr className="flex-1" />
          </div>

         
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          
          <button className="mt-6 bg-[#0b3a4a] text-white py-3 rounded-lg font-semibold hover:opacity-90">
            Log In
          </button>

          
          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

