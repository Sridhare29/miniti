import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Calendar, 
  Clock, 
  MapPin, 
  Truck, 
  Send 
} from 'lucide-react';
import ecoabs from "../../src/image/WelcomeBanner.png";
        
        

const BookRequest = () => {
  const [formData, setFormData] = useState({
    pickupSlot: '',
    expectedWeight: '',
    pickupAddress: '',
    message: '',
    pickupDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0">
        <img src={ecoabs} alt="leaf" className="w-full h-full object-contain" />
        </div>      

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-[#335230]"
        >
          {/* Banner Section */}
          <div className="relative bg-gradient-to-r from-[#335230] to-[#4a7440] text-white p-10">
            <div className="absolute inset-0 opacity-20">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                className="w-full h-full"
              >
                <path 
                  fill="white" 
                  fillOpacity="1" 
                  d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
                ></path>
              </svg>
            </div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <motion.h1 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-4xl font-bold mb-4 flex items-center gap-4"
                >
                  <Truck className="w-12 h-12" />
                  Pickup Scheduling
                </motion.h1>
                <p className="text-lg opacity-80 max-w-xl">
                  Streamline your pickup process with our easy-to-use scheduling system. 
                  Quick, convenient, and tailored to your needs.
                </p>
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="hidden md:block"
              >
                <Package className="w-32 h-32 text-white/30" />
              </motion.div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-10 space-y-6 bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {/* Pickup Slot */}
                <div className="relative">
                  <label className="block mb-2 flex items-center gap-2 text-slate-700 font-semibold">
                    <Clock className="w-5 h-5 text-[#335230]" />
                    Pickup Slot
                  </label>
                  <select
                    name="pickupSlot"
                    value={formData.pickupSlot}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230] transition"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="morning">Morning (8-11 AM)</option>
                    <option value="afternoon">Afternoon (12-3 PM)</option>
                    <option value="evening">Evening (4-7 PM)</option>
                  </select>
                </div>

                {/* Pickup Address */}
                <div className="relative">
                  <label className="block mb-2 flex items-center gap-2 text-slate-700 font-semibold">
                    <MapPin className="w-5 h-5 text-[#335230]" />
                    Pickup Address
                  </label>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                    required
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230] transition"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {/* Expected Weight */}
                <div className="relative">
                  <label className="block mb-2 flex items-center gap-2 text-slate-700 font-semibold">
                    <Package className="w-5 h-5 text-[#335230]" />
                    Expected Weight
                  </label>
                  <select
                    name="expectedWeight"
                    value={formData.expectedWeight}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230] transition"
                  >
                    <option value="">Select Weight Range</option>
                    <option value="5-10">5-10 Kg</option>
                    <option value="10-20">10-20 Kg</option>
                    <option value="20+">20+ Kg</option>
                  </select>
                </div>

                {/* Pickup Date */}
                <div className="relative">
                  <label className="block mb-2 flex items-center gap-2 text-slate-700 font-semibold">
                    <Calendar className="w-5 h-5 text-[#335230]" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230] transition"
                  />
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="relative">
              <label className="block mb-2 text-slate-700 font-semibold">
                Additional Instructions
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special instructions or notes..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230] transition"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg text-white font-bold flex items-center justify-center gap-3 transition ${
                isSubmitting 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#335230] to-[#4a7440] hover:from-[#29421c] hover:to-[#3e5a2d]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">◌</span>
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Schedule Pickup
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookRequest;
