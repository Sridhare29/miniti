import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  CircleUser, 
  Mail, 
  Phone, 
  Leaf, 
  ChevronDown, 
  LogOut, 
  Settings, 
  User, 
  Calendar, 
  Recycle
} from "lucide-react";
import logoMiniti from "../image/logo.png"; 


// // Simulating router functionality for demonstration
// const useLocation = () => {
//   return { pathname: "/booking" };
// };

// const Link = ({ to, children, className }) => {
//   return (
//     <a href={to} className={className}>
//       {children}
//     </a>
//   );
// };

const Header = () => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Mock eco points data
  const ecoPoints = 1250;
  const ecoLevel = "Earth Guardian";

  // Toggle profile dropdown
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <div className="w-full bg-white">
      {/* Top Header Section */}
      <div className="header-top bg-[#c1E6BA] h-12 md-lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[50px] text-slate-500">
            {/* Contact Information */}
            <ul className="flex items-center gap-8 font-medium text-black">
              <li className="flex items-center gap-2 text-sm relative after:content-[''] after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:right-[-16px]">
                <Mail className="w-4 h-4 text-green-700" />
                <span className="text-xs">green-support@miniti.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-green-700" />
                <span className="text-xs">+(91) ECO-HELP</span>
              </li>
            </ul>
            {/* Eco tips rotating text */}
            <div className="hidden md:flex items-center text-xs font-medium text-green-800">
              <Leaf className="w-4 h-4 mr-2 text-green-600" />
              <span>Eco Tip: Recycling one aluminum can saves enough energy to run a TV for 3 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-white">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="h-[70px] flex justify-between items-center">
            {/* Logo Section */}
            <div className="w-1/4">
              <Link to="/">
                <img className="h-[50px]" src={logoMiniti} alt="Logo" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="w-3/4 flex items-center justify-between">
              <ul className="flex items-center gap-6 text-sm font-medium p-2 border-2 border-[#ededed] bg-[#ffffff] rounded-2xl">
                <li><a href="/#main-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Marketplace</a></li>
                <li><a href="/#about-banner" className="p-1 text-slate-600 hover:text-[#4DA674]">Eco Insights</a></li>
                <li>
                  <Link to="/scraprate" className={`p-1 transition-colors ${pathname === "/scraprate" ? "text-[#4DA674]" : "text-slate-600 hover:text-[#4DA674]"}`}>
                    Recycle Hub
                  </Link>
                </li>
                <li><a href="/#services-banner" className="p-1 text-slate-600 hover:text-[#4DA674] transition-colors">Our Services</a></li>
                <li>
                  <Link to="/booking" className={`p-1 ${pathname === "/booking" ? "text-[#4DA674] transition-colors" : "text-slate-600 hover:text-[#4DA674]"}`}>
                    Bookings
                  </Link>
                </li>
              </ul>

              {/* User Profile with Eco Points */}
              <div className="relative px-2">
                <div 
                  className="flex items-center gap-2 border border-green-100 px-3 py-2 rounded-full bg-gradient-to-r from-[#EAF8E7] to-[#E0F3DF] cursor-pointer hover:shadow-md transition-all duration-300"
                  onClick={toggleProfileDropdown}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4DA674] text-white">
                    <CircleUser className="w-6 h-6" />
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center">
                      <span className="text-xs font-medium text-gray-700">Eco User</span>
                      <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="w-3 h-3 text-green-600" />
                      <span className="text-xs font-semibold text-[#4DA674]">{ecoPoints} points</span>
                    </div>
                  </div>
                </div>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 shadow-lg rounded-lg text-sm overflow-hidden z-50">
                    {/* User Info Card */}
                    <div className="bg-gradient-to-br from-green-50 to-[#E0F3DF] p-4 border-b border-green-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#4DA674] flex items-center justify-center text-white">
                          <User className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Eco User</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs font-medium text-green-800">{ecoLevel}</span>
                            <div className="ml-1 px-1.5 py-0.5 bg-green-100 rounded-full flex items-center">
                              <Leaf className="w-3 h-3 mr-1 text-green-600" />
                              <span className="text-xs font-semibold text-[#4DA674]">{ecoPoints}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Level Progress</span>
                          <span className="text-green-700">750/1000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-[#4DA674] h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div>
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">My Profile</span>
                      </Link>
                      <Link to="/my-bookings" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">My Bookings</span>
                      </Link>
                      <Link to="/eco-impact" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                        <Recycle className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">My Eco Impact</span>
                      </Link>
                      <Link to="/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                        <Settings className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Settings</span>
                      </Link>
                      <button 
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100"
                        onClick={() => console.log('Logout')}
                      >
                        <LogOut className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
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
              <img src={ logoMiniti } alt="Logo" className="h-10 w-auto" />
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