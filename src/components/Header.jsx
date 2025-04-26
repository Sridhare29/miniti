import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleUser, Menu, Heart, ShoppingCart, User, Mail, Phone } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="w-full bg-white">
      {/* Top Header Section */}
      <div className="header-top bg-[#c1E6BA] h-12 md-lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[50px] text-slate-500">
            {/* Contact Information */}
            <ul className="flex items-center gap-8 font-medium text-black">
              <li className="flex items-center gap-2 text-sm relative after:content-[''] after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:right-[-16px]">
                <Mail style={{ width: "16px", height: "16px" }} />
                <span className="text-xs">green-support@miniti.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone style={{ width: "16px", height: "16px" }} />
                <span className="text-xs">+(91) ECO-HELP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-white">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="h-[60px] flex justify-between items-center">
            {/* Logo Section */}
            <div className="w-1/4">
              <Link to="/">
                <img className="h-[50px]" src="http://localhost:3000/images/logo.png" alt="Logo" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="w-3/4 flex items-center justify-between">
              <ul className="flex items-center gap-6 text-sm font-medium p-2 border-2 border-[#ededed] bg-[#ffffff] rounded-2xl">
                <li><a href="#main-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Marketplace</a></li>
                <li><a href="#about-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Eco Insights</a></li>
                <li>
                  <Link to="/scraprate" className={`p-1 ${pathname === "/marketprice" ? "text-[#4DA674]" : "text-slate-600"}`}>
                    Recycle Hub
                  </Link>
                </li>
                <li><a href="#services-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Our Services</a></li>
                <li>
                  <Link to="/booking" className={`p-1 ${pathname === "/marketprice" ? "text-[#4DA674]" : "text-slate-600"}`}>
                    Bookings
                  </Link>
                </li>              </ul>

              {/* Cart and Wishlist */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAF8E7] cursor-pointer transition duration-300 hover:shadow-lg" onClick={() => console.log("User Profile Clicked")}>
                  <CircleUser className="text-[#4DA674]" size={24} />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 shadow-md rounded-lg text-sm text-slate-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => console.log('Logout')}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden md-lg:block">
        {/* Backdrop */}
        <div onClick={() => setShowSidebar(true)} className={`fixed duration-200 transition-all ${showSidebar ? "invisible" : "visible"} w-screen h-screen bg-[rgba(0,0,0,0.3)] top-0 left-0 z-20`}></div>

        {/* Sidebar */}
        <div className={`w-[300px] z-[9999] transition-all duration-300 fixed ${showSidebar ? "-left-[300px]" : "left-0"} top-0 overflow-y-auto bg-[#f9fafc] h-screen py-6 px-8 rounded-tr-2xl rounded-br-2xl shadow-lg`}>
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <Link to="/" className="flex justify-start items-center">
              <img src="http://localhost:3000/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-4 text-sm font-semibold uppercase">
              {[
                { label: "Marketplace", path: "/" },
                { label: "Recycle Hub", path: "/shop" },
                { label: "Eco Insights", path: "/blog" },
                { label: "Our Mission", path: "/about" },
                { label: "Connect", path: "/contact" },
              ].map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.path}
                    className={`block py-2 ${pathname === nav.path ? "text-[#948105] bg-[#e9fbe6] rounded-md px-2" : "text-slate-600 hover:bg-gray-100 rounded-md px-2"}`}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;