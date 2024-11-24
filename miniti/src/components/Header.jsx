import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait, IoMdArrowDropdown } from "react-icons/io";
import { FaFacebookF, FaLock, FaUser, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const user = true;
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
                                    src="http://localhost:3000/images/language.png"
                                    alt="Language"
                                    className="w-5 h-5"
                                />
                                <IoMdArrowDropdown />
                                <ul className="absolute invisible group-hover:visible transition-all duration-200 top-10 left-0 bg-black text-white p-2 w-[100px] rounded-md shadow-md z-10 flex flex-col gap-2">
                                    <li className="hover:bg-gray-700 px-2 py-1 rounded">Hindi</li>
                                    <li className="hover:bg-gray-700 px-2 py-1 rounded">English</li>
                                </ul>
                            </div>

                            {/* User Login/Account */}
                            {user ? (
                                <Link
                                    className="flex items-center gap-2 text-sm text-black hover:text-blue-600 transition-colors"
                                    to="/dashboard"
                                >
                                    <FaUser />
                                    <span>Kazi Ariyan</span>
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
        </div>
    );
};

export default Header;