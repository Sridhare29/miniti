import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EcoFooter = () => {
  const quickLinks = [
    { title: 'Marketplace', links: [
      { name: 'Sell Recyclables', path: '/sell' },
      { name: 'Buy Recycled', path: '/buy' },
      { name: 'Pricing', path: '/pricing' }
    ]},
    { title: 'Company', links: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Mission', path: '/mission' },
      { name: 'Team', path: '/team' }
    ]},
    { title: 'Support', links: [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact', path: '/contact' },
      { name: 'FAQ', path: '/faq' }
    ]}
  ];

  const socialLinks = [
    { icon: FaFacebookF, link: '#', color: 'text-blue-600' },
    { icon: FaTwitter, link: '#', color: 'text-sky-400' },
    { icon: FaLinkedin, link: '#', color: 'text-blue-700' },
    { icon: FaInstagram, link: '#', color: 'text-pink-500' }
  ];

  return (
    <footer className="relative bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16 py-8">
      {/* Divider Line at the start */}
      <div className="w-full h-px bg-[#cae4c7] mb-8"></div>

      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center top-0 opacity-10">
        <h1 className="text-[150px] lg:text-[200px] font-black text-[#cae4c7] tracking-wider">
          MINITI
        </h1>
      </div>

      <div className="relative container mx-auto flex flex-wrap justify-between items-start gap-8 z-10">
        <div className="flex flex-row justify-stretch w-full gap-6">
          {/* Brand Section */}
          <div className="flex flex-col items-start w-full lg:w-1/4 space-y-4 text-[#335230]">
            <img 
              src="http://localhost:3000/images/logo.png" 
              alt="Miniti Logo" 
              className="h-12" 
            />
            <p className="text-gray-700 text-sm">
              Transforming waste into wealth, one recyclable at a time. Join our mission to create a sustainable future.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#baa53c]" />
                <span>green-support@miniti.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#baa53c]" />
                <span>+(91) ECO-HELP</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#baa53c]" />
                <span>Kolathur, Chennai-600099</span>
              </div>
            </div>
          </div>

          {/* Newsletter and Social Links */}
          <div className="flex flex-col items-start w-full lg:w-1/4 space-y-4 text-[#335230]">
            <h4 className="font-bold text-lg mb-4">Stay Green, Stay Informed</h4>
            <p className="text-sm">Subscribe to our newsletter for eco-tips and recycling insights!</p>
            <div className="flex w-full ">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded-l-lg border border-[#cae4c7] focus:outline-none focus:ring-2 focus:ring-[#335230]"
              />
              <button className="bg-white border-2 border-gray-200 text-[#baa53c] px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#baa53c]  hover:bg-orange-100 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className={`${social.color} hover:opacity-70 transition-opacity text-xl`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-8 pt-6 border-t border-[#cae4c7] text-center">
        <p className="text-sm text-[#335230]">
          © {new Date().getFullYear()} Miniti. All Rights Reserved. 
          <span className="ml-4 text-[#baa53c]">Proudly Sustainable</span>
        </p>
      </div>
    </footer>
  );
};

export default EcoFooter;
