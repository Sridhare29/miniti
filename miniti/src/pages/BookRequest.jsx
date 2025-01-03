import React, { useState } from 'react';
import { Clock, Package, Calendar, Send } from 'lucide-react';

const PickupRequestForm = () => {
  const [formData, setFormData] = useState({
    pickupSlot: '',
    expectedWeight: '',
    message: '',
    status: 'pending', // Default status
    pickupDate: '',
    addressId: '3fa85f64-5717-4562-b3fc-2c963f66afa6' // Default addressId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Format the date to ISO string
    const formattedData = {
      ...formData,
      pickupDate: new Date(formData.pickupDate).toISOString()
    };

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData)
      });
      
      if (response.ok) {
        alert('Pickup request submitted successfully!');
        // Reset form or redirect as needed
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      alert('Error submitting request: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 text-center">Schedule Pickup</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pickup Slot */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Clock className="w-5 h-5" />
                Pickup Slot
              </label>
              <select
                name="pickupSlot"
                value={formData.pickupSlot}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              >
                <option value="">Select a time slot</option>
                <option value="9AM-12PM">9 AM - 12 PM</option>
                <option value="12PM-3PM">12 PM - 3 PM</option>
                <option value="3PM-6PM">3 PM - 6 PM</option>
              </select>
            </div>

            {/* Expected Weight */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Package className="w-5 h-5" />
                Expected Weight
              </label>
              <input
                type="text"
                name="expectedWeight"
                value={formData.expectedWeight}
                onChange={handleChange}
                placeholder="Enter expected weight"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Pickup Date */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Calendar className="w-5 h-5" />
                Pickup Date
              </label>
              <input
                type="datetime-local"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special instructions?"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-24 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Send className="w-5 h-5" />
              Schedule Pickup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PickupRequestForm;