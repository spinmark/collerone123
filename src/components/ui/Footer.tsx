import React from "react";
import {
  LinkedIn,
  Instagram,
  YouTube,
  Facebook,
  X as Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 lg:px-22">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
        {/* Logo */}
        <div className="col-span-1">
          <h1 className="text-[40px] font-extrabold italic text-white">
            zomato
          </h1>
        </div>

        {/* Eternal */}
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">Eternal</h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>District</li>
            <li>Hyperpure</li>
            <li>Feeding India</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* For Restaurants */}
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">For Restaurants</h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        {/* For Delivery Partners */}
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">
            For Delivery Partners
          </h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">Learn More</h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms of Service</li>
            <li>Help & Support</li>
            <li>Report a Fraud</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Social Links + App Buttons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 space-y-6 md:space-y-0">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <LinkedIn />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Instagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <YouTube />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Facebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Twitter />
          </a>
        </div>

        {/* App Store Buttons */}
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg"
            alt="App Store"
            className="w-40 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="w-40 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
