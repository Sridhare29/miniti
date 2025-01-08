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
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* Display the error message */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Pickup Slot:
            <input
              type="text"
              name="pickupSlot"
              value={formData.pickupSlot}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Expected Weight:
            <input
              type="text"
              name="expectedWeight"
              value={formData.expectedWeight}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Pickup Date:
            <input
              type="text"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address ID:
            <input
              type="text"
              name="addressId"
              value={formData.addressId}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit Pickup Request</button>
      </form>
    </div>
  );
};

export default BookRequest;
