import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { Leaf, Menu, Heart, ShoppingCart, User, Lock, Mail, Phone, Facebook, Twitter, Linkedin, Github } from "lucide-react";


const Header = () => {
  const {pathname} = useLocation()
  const [showshidebar, setShowShidebar] = useState(true);
  const user = true;
  const wishlist_count = 3

  return (
    <div className="w-full bg-white">
            {/* Top Header Section */}
            <div className="header-top bg-[#c1E6BA] md-lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[50px] text-slate-500">
            {/* Contact Information */}
            <ul className="flex items-center gap-8 font-medium text-black">
              <li className="flex items-center gap-2 text-sm relative after:content-[''] after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:right-[-16px]">
                <Mail />
                <span>green-support@miniti.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone />
                <span>+(123) ECO-HELP</span>
              </li>
            </ul>

            {/* Social Media and User Options */}
            <div className="flex items-center gap-8">
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 text-black">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  <Github />
                </a>
              </div>

              {/* User Login/Account */}
              {user ? (
                <div className="flex items-center gap-2 text-sm text-black hover:text-green-600 transition-colors cursor-pointer">
                  <User />
                  <span>Eco Warrior</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-black hover:text-green-600 transition-colors cursor-pointer">
                  <Lock />
                  <span>Join Green Movement</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* logo  */}
      <div className="w-white pb-8">
        <div className="w-[85%] lg:w-[90%] mx-auto">
         <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap ">
         <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                    <div className='flex justify-between items-center'>
 
                <Link to='/'>
                    <img src="http://localhost:3000/images/logo.png" alt="" />
                </Link>
                <div className='justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowShidebar(false)}>
                    <span> <CiMenuFries/> </span>
                </div>
                </div> 
                </div>
              {/* navbar topic head [#023336]- dark*/}
              <div className="md:lg:w-full w-9/12">
              <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8 '>
                <ul className="flex items-center justify-center gap-8 font-bold uppercase text-lg md-lg:hidden h-[100px]">
                    <li>
                        <Link className={`p-2 block ${pathname === '/' ?  'text-[#4DA674]' : 'text-slate-600' } `}>Home</Link>
                    </li>
                    <li> 
                        <Link className={`p-2 block ${pathname === '/shop' ?  'text-[#4DA674]' : 'text-slate-600' } `}>Shop</Link>
                    </li>
                    <li>
                       <Link className={`p-2 block ${pathname === '/blog' ?  'text-[#4DA674]' : 'text-slate-600' } `}>Blog</Link>
                    </li>
                    <li>
                        <Link className={`p-2 block ${pathname === '/about' ?  'text-[#4DA674]' : 'text-slate-600' } `}>About Us</Link>
                    </li>
                    <li>
                       <Link className={`p-2 block ${pathname === '/contact' ?  'text-[#4DA674]' : 'text-slate-600' } `}>Contact Us</Link>
                    </li>
                </ul>
                {/* Cart and wishlist */}
                <div className="flex md-lg:hidden items-center justify-center gap-5 w-[10%] h-[50%]">
                  {[
                    { icon: Heart, color: 'text-[#4DA674]' },
                    { icon: ShoppingCart, color: 'text-[#4DA674]' }
                  ].map(({ icon: Icon, color }, index) => (
                    <div 
                      key={index} 
                      className="relative flex justify-center items-center cursor-pointer px-4 py-4 rounded-full bg-[#EAF8E7]"
                    >
                      <span className={`text-xl ${color}`}><Icon /></span>
                      <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                        {wishlist_count}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              </div>
              
          </div>
        </div>
      </div>

  {/* only at sm - menu  visible    */}
  <div className="hidden md-lg:block">
    {/* Backdrop */}
    <div
      onClick={() => setShowShidebar(true)}
      className={`fixed duration-200 transition-all ${
        showshidebar ? "invisible" : "visible"
      } w-screen h-screen bg-[rgba(0,0,0,0.3)] top-0 left-0 z-20`}
    ></div>

    {/* Sidebar */}
    <div
      className={`w-[300px] z-[9999] transition-all duration-300 fixed ${
        showshidebar ? "-left-[300px]" : "left-0"
      } top-0 overflow-y-auto bg-[#f9fafc] h-screen py-6 px-8 rounded-tr-2xl rounded-br-2xl shadow-lg`}
    >
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <Link to="/" className="flex justify-start items-center">
          <img
            src="http://localhost:3000/images/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>



        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 text-sm font-semibold uppercase">
          {[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: "Blog", path: "/blog" },
            { label: "About Us", path: "/about" },
            { label: "Contact Us", path: "/contact" },
          ].map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.path}
                className={`block py-2 ${
                  pathname === nav.path
                    ? "text-[#059473] bg-[#e9fbe6] rounded-md px-2"
                    : "text-slate-600 hover:bg-gray-100 rounded-md px-2"
                }`}
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
