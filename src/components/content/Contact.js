import React from "react";

export const Contact = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 mt-10">
   
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you! Please fill out the form below.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap -mx-4">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 px-4">
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-orange-500 hover:bg-orange-600 font-medium py-2 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 123 Main Street, Your City, 45678
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@example.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
