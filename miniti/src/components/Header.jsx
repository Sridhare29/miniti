import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait, IoMdArrowDropdown } from "react-icons/io";
import {
  FaFacebookF,
  FaLock,
  FaUser,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaList,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";


const Header = () => {
  const {pathname} = useLocation()
  const [showshidebar, setShowShidebar] = useState(true);
  const user = true;
  const wishlist_count = 3

  return (
    <div className="w-full bg-white">
      {/* Top Header Section */}
      <div className="header-top bg-[#caddff] md-lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[50px] text-slate-500">
            {/* Contact Information */}
            <ul className="flex items-center gap-8 font-medium text-black">
              <li className="flex items-center gap-2 text-sm relative after:content-[''] after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:right-[-16px]">
                <MdEmail />
                <span>support@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <IoMdPhonePortrait />
                <span>+(123) 3243 343</span>
              </li>
            </ul>

            {/* Social Media and User Options */}
            <div className="flex items-center gap-8">
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 text-black">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  <FaGithub />
                </a>
              </div>

              {/* Language Dropdown */}
              <div className="relative group cursor-pointer text-sm text-slate-800 flex items-center gap-1">
                <img
                  src="http://localhost:3000/images/lang.png"
                  alt="Language"
                  className="w-10 h-15"
                />
                <IoMdArrowDropdown />
                <ul className="absolute invisible group-hover:visible transition-all duration-200 top-10 left-0 bg-black text-white p-2 w-[100px] rounded-md shadow-md z-10 flex flex-col gap-2">
                  <li className="hover:bg-gray-700 px-2 py-1 rounded">Hindi</li>
                  <li className="hover:bg-gray-700 px-2 py-1 rounded">
                    English
                  </li>
                </ul>
              </div>

              {/* User Login/Account */}
              {user ? (
                <Link
                  className="flex items-center gap-2 text-sm text-black hover:text-blue-600 transition-colors"
                  to="/"
                >
                  <FaUser />
                  <span>Sridhar</span>
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-2 text-sm text-black hover:text-blue-600 transition-colors"
                  to="/login"
                >
                  <FaLock />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* logo  */}
      <div className="w-white">
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
              {/* navbar topic head */}
              <div className="md:lg:w-full w-9/12">
              <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8 '>
                <ul className="flex items-center justify-center gap-8 font-bold uppercase text-lg md-lg:hidden h-[100px]">
                    <li>
                        <Link className={`p-2 block ${pathname === '/' ?  'text-[#70b247]' : 'text-slate-600' } `}>Home</Link>
                    </li>
                    <li>
                        <Link className={`p-2 block ${pathname === '/shop' ?  'text-[#70b247]' : 'text-slate-600' } `}>Shop</Link>
                    </li>
                    <li>
                       <Link className={`p-2 block ${pathname === '/blog' ?  'text-[#70b247]' : 'text-slate-600' } `}>Blog</Link>
                    </li>
                    <li>
                        <Link className={`p-2 block ${pathname === '/about' ?  'text-[#70b247]' : 'text-slate-600' } `}>About Us</Link>
                    </li>
                    <li>
                       <Link className={`p-2 block ${pathname === '/contact' ?  'text-[#70b247]' : 'text-slate-600' } `}>Contact Us</Link>
                    </li>
                </ul>
                {/* Cart and wishlist */}
              <div className="flex md-lg:hidden items-center justify-center gap-5  w-[10%] h-[50%]">
              <div className="relative flex justify-center items-center cursor-pointer px-4 py-4 rounded-full bg-[#d7f2da]">
              <span className='text-xl text-[#70b247]'><FaHeart /></span>
                <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] '>
                { wishlist_count }
                </div>
                </div>
                <div className="relative flex justify-center items-center cursor-pointer px-4 py-4 rounded-full bg-[#d7f2da]">
                <span className='text-xl text-[#70b247]'><FaCartShopping/></span>
                <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] '>
                { wishlist_count }
                </div>
                </div>
              </div>
              </div>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
