import React from "react";
import Image from "next/image";

const AddContactCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
          Add New Contact
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:items-start mb-6">
          {/* Add Photo Section with Larger Image and Right Margin */}
          {/* Add Photo Section with Image and Add Photo Text */}
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center justify-center w-32 h-32 rounded-full bg-gray-200 border-2 border-black mr-12">
              <Image
                src="/User_light.png" // Path to the image
                alt="User Icon"
                width={80} // Increased width for the image
                height={80} // Increased height for the image
                className="rounded-full"
              />
            </div>

            {/* Add Photo Text Below Image */}
            <p className="text-red-500 text-sm mt-2 mr-12">Add Photo</p>
          </div>

          <div className="w-full mt-4 sm:mt-0">
            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100 text-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Email and Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 bg-gray-100 text-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 bg-gray-100 text-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Job Title and Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Job Title</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 bg-gray-100 text-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 bg-gray-100 text-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Save Contact Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-500 text-white px-12 py-2 rounded-xl shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContactCard;
