import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginModal = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Name */}
      <input
        type="text"
        placeholder="Enter Name"
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Email */}
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Enter Mobile Number"
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Password */}
      <div className="relative mb-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
           maxLength={8}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>

      {/* Password */}
      <div className="relative mb-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirn Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
           maxLength={8}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>

      {/* Create Account Button */}
      <button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-md py-2 transition">
        SignUp
      </button>

      {/* Divider */}
      <div className="flex items-center justify-center my-4">
        <div className="h-[1px] bg-gray-300 w-1/3"></div>
        <span className="mx-2 text-gray-400 text-sm">or</span>
        <div className="h-[1px] bg-gray-300 w-1/3"></div>
      </div>

      {/* Google Button */}
      <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50">
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        <span className="text-gray-700 font-medium">
          Sign in with Google
        </span>
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-5">
        Already have an account{" "}
        <a
          className="text-red-500 hover:underline cursor-pointer"
          onClick={() => {
            props.setOpenSignup(false),
              props.setOpenLogin(true)
          }}
        >
          Login
        </a>
      </p>
    </>
  );
};

export default LoginModal;
