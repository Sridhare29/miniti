import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { Leaf, Menu, Heart, ShoppingCart, User, Mail, Phone } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const wishlistCount = 3;

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
                  <Link to="/shop" className={`p-1 ${pathname === "/marketprice" ? "text-[#4DA674]" : "text-slate-600"}`}>
                    Recycle Hub
                  </Link>
                </li>
                <li><a href="#services-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Our Services</a></li>
                <li><a href="#booking-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Connect</a></li>
              </ul>

              {/* Cart and Wishlist */}
              <div className="flex items-center mr-6 gap-3">
                <div className="relative flex items-center cursor-pointer p-2 rounded-full bg-[#EAF8E7]">
                  <Heart className="text-[#4DA674] text-sm" style={{ width: "18px", height: "18px" }} />
                  <div className="w-[12px] h-[12px] absolute bg-red-500 rounded-full text-white text-[8px] flex items-center justify-center -top-[2px] -right-[2px]">
                    {wishlistCount}
                  </div>
                </div>
                <div className="relative flex items-center cursor-pointer p-2 rounded-full bg-[#EAF8E7]">
                  <ShoppingCart className="text-[#4DA674]" style={{ width: "18px", height: "18px" }} />
                  <div className="w-[12px] h-[12px] absolute bg-red-500 rounded-full text-white text-[8px] flex items-center justify-center -top-[2px] -right-[2px]">
                    {wishlistCount}
                  </div>
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