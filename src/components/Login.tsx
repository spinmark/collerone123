import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginModal = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="relative mb-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>

      <button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-md py-2 transition">
        Login
      </button>

      <p className="text-center text-sm text-gray-600 mt-5">
        Create an account?{" "}
        <a
          className="text-red-500 hover:underline cursor-pointer"
          onClick={() => {
            props.setOpenSignup(true);
            props.setOpenLogin(false);
          }}
        >
          SignUp
        </a>

      </p>
    </>
  );
};

export default LoginModal;
