// components/Sidebar.js
import { useState } from 'react';
import SidebarHeader from './SidebarHeader';
import Link from 'next/link';

export default function Sidebar({isVisible}) {
//   const [isVisible, setIsVisible] = useState(false); // Sidebar visibility state

//   const toggleSidebar = () => {
//     setIsVisible(!isVisible); // Toggle visibility
//   };

if (!isVisible) return null;


  return (
    <>
      {/* Sidebar */}
      <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 z-40 md:translate-x-0`}
    >
      
        {/* Sidebar Header */}
        <SidebarHeader />

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 px-4 mt-4">
          <Link href="/dashboard" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-dashboard mr-3" /> Dashboard
          </Link>
          <Link href="/business-card" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-business-card mr-3" /> Business Card
          </Link>
          <Link href="/link-in-bio" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-linkinbio mr-3" /> Link In Bio
          </Link>
          <Link href="/qrcode" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-qrcode mr-3" /> QR Codes
          </Link>
          <Link href="/contacts" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-contacts mr-3" /> Contacts
          </Link>
          <Link href="/leads" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-leads mr-3" /> My Leads
          </Link>
          <Link href="/virtual-bg" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-virtual-bg mr-3" /> Virtual Background
          </Link>
          <Link href="/email-signature" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-email mr-3" /> Email Signature
          </Link>
          <Link href="/card-activation" className="flex items-center p-3 hover:bg-gray-800 rounded-md">
            <i className="icon-card-activation mr-3" /> Card Activation
          </Link>
        </nav>

        {/* Upgrade Button */}
        <div className="p-4 mt-auto">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg">
            Upgrade Now
          </button>
        </div>
      </aside>
    </>
  );
}
