import React, { useState } from "react";
import pickupApi from "../Api/PickupApi/Pickup.api"; // Import your API function

const BookRequest = () => {
  const [formData, setFormData] = useState({
    pickupSlot: "",
    expectedWeight: "",
    message: "",
    status: "",
    pickupDate: "",
    addressId: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // For storing error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message before submitting

    try {
      const response = await pickupApi.createPickupRequest(formData);
      console.log("Pickup request successful:", response);
      alert("Pickup request created successfully!");
    } catch (error) {
      console.error("Error details:", error); // Log complete error for debugging

      // Enhanced error handling to display detailed error messages
      if (error.response) {
        // If the error has a response object, extract message or status
        const status = error.response.status; // Get the HTTP status code
        const statusText = error.response.statusText; // Get the HTTP status text
        const serverMessage =
          error.response.data?.message || error.response.statusText; // Get custom error message from server, if available

        setErrorMessage(
          `Server error: ${serverMessage} (Status: ${status} ${statusText})`
        );
      } else if (error.request) {
        // If no response from the server
        setErrorMessage("Network error: No response received");
      } else {
        // Other errors (e.g., bad request formation)
        setErrorMessage(`Unexpected error: ${error.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {errorMessage}
        </div>
      )}
  
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Pickup Request</h2>
          <p className="mt-2 text-sm text-gray-600">Please fill in the details below</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Slot
              <input
                type="text"
                name="pickupSlot"
                value={formData.pickupSlot}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expected Weight
              <input
                type="text"
                name="expectedWeight"
                value={formData.expectedWeight}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
  
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </label>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Date
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
  
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address ID
              <input
                type="text"
                name="addressId"
                value={formData.addressId}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
        </div>
  
        <div className="pt-5">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition hover:scale-105"
          >
            Submit Pickup Request
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default BookRequest;
