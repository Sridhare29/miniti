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
    <footer className="bg-gradient-to-br from-green-300 to-green-300 text-gray-800 py-8">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-start gap-8">
        

        <div className="flex flex-row justify-stretch w-full gap-6">
        {/* Brand Section */}
        <div className="flex flex-col items-start w-full lg:w-1/4 space-y-4">
          <img 
            src="http://localhost:3000/images/logo.png" 
            alt="Miniti Logo" 
            className="h-12" 
          />
          <p className="text-gray-700 text-sm">
            Transforming waste into wealth, one recyclable at a time. Join our mission to create a sustainable future.
          </p>
          <div className=" space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              <span>green-support@miniti.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>+(123) ECO-HELP</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>123 Green Street, Eco City</span>
            </div>
          </div>
      
      
        </div>

         {/* Newsletter and Social Links */}
         <div className="flex flex-col items-start w-full lg:w-1/4 space-y-4">
          <h4 className="font-bold text-lg mb-4 text-[#4a544e]">Stay Green, Stay Informed</h4>
          <p className="text-sm">Subscribe to our newsletter for eco-tips and recycling insights!</p>
          <div className="flex w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 rounded-l-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-[#4DA674] text-white px-4 py-2 rounded-r-lg hover:bg-green-400 transition-colors" >
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

        {/* Quick Links */}
        {/* <div className="flex flex-wrap w-full lg:w-2/4 justify-start gap-20">
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4 text-[#4DA674]">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-gray-700 hover:text-[#4DA674] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

       
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-green-200 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Miniti. All Rights Reserved. 
          <span className="ml-4 text-[#4DA674]">Proudly Sustainable</span>
        </p>
      </div>
    </footer>
  );
};

export default EcoFooter;
