import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Calendar, Clock, MapPin, Truck } from 'lucide-react';
import ecoabs from "../image/WelcomeBanner.png";
import { useDispatch } from 'react-redux';
import { createPickup } from '../state/actions/Pickup.action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookRequest = () => {
  const dispatch = useDispatch();
  
  const initialFormState = {
    pickupSlot: '',
    expectedWeight: '',
    pickupAddress: '',
    message: '',
    pickupDate: '',
    status: 'started',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await dispatch(createPickup(formData));
      // Check if the action was successful
      console.log(result);
      if (result.payload && result.payload.status === 201) {
        toast.success('Pickup scheduled successfully!', {
          position: "top-right",
          autoClose: 3000
        });
        resetForm();
      } else {
        // Handle error case
        toast.error('Failed to schedule pickup. Please try again.', {
          position: "top-right",
          autoClose: 3000
        });
      }
    } catch (error) {
      console.error('Failed to schedule pickup:', error);
      toast.error(error.message || 'Failed to schedule pickup. Please try again.', {
        position: "top-right",
        autoClose: 3000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col">
      <ToastContainer/>
      {/* Background Image */}
      <div className="absolute bottom-0 w-full z-0">
        <img
          src={ecoabs}
          alt="leaf"
          className="w-full h-auto object-cover opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 z-10 flex items-center justify-center px-4 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-[#335230]"
        >
          {/* Banner Section */}
          <div className="bg-gradient-to-r from-[#335230] to-[#4a7440] text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                  <Truck className="w-8 h-8" />
                  Pickup Scheduling
                </h1>
                <p className="text-sm opacity-80 mt-2">
                  Streamline your pickup process with our easy-to-use scheduling system.
                </p>
              </div>
              <Package className="w-16 h-16 text-white/20 hidden md:block" />
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="p-4 space-y-4 bg-white overflow-auto"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  <Clock className="inline-block w-4 h-4 text-[#335230]" /> Pickup Slot
                </label>
                <select
                  name="pickupSlot"
                  value={formData.pickupSlot}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230]"
                >
                  <option value="">Select Time Slot</option>
                  <option value="morning">Morning (8-11 AM)</option>
                  <option value="afternoon">Afternoon (12-3 PM)</option>
                  <option value="evening">Evening (4-7 PM)</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  <Package className="inline-block w-4 h-4 text-[#335230]" /> Expected Weight
                </label>
                <select
                  name="expectedWeight"
                  value={formData.expectedWeight}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230]"
                >
                  <option value="">Select Weight Range</option>
                  <option value="5-10">5-10 Kg</option>
                  <option value="10-20">10-20 Kg</option>
                  <option value="20+">20+ Kg</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  <MapPin className="inline-block w-4 h-4 text-[#335230]" /> Pickup Address
                </label>
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  required
                  placeholder="Enter pickup location"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230]"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">
                  <Calendar className="inline-block w-4 h-4 text-[#335230]" /> Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-slate-700">
                Additional Instructions
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                // rows="3"
                placeholder="Any special instructions..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#335230]"
              />
            </div>

            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-lg text-white text-sm font-bold flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#335230] to-[#4a7440] hover:from-[#29421c] hover:to-[#3e5a2d]'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Schedule Pickup'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookRequest;
