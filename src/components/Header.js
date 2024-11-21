// components/Header.js
import { BellAlertIcon } from '@heroicons/react/24/outline'; // Updated import path

export default function Header({ title, toggleSidebar }) {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-md md:px-8">
      {/* Hamburger Menu (Mobile Toggle) */}
      <button
        className="lg:hidden text-black"
        onClick={toggleSidebar}
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Title */}
      <h1 className="text-lg md:text-2xl font-bold text-gray-800 truncate">{title}</h1>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button
          type="button"
          className="relative text-gray-600 hover:text-gray-800"
        >
          <BellAlertIcon className="h-6 w-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
        </button>

        {/* User Avatar */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/40" // Replace with actual avatar URL
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
