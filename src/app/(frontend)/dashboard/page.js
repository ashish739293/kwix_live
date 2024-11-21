'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);



  const handleDateChange = (date) => {
    setStartDate(date);
    setIsCalendarOpen(false); // Close calendar
    console.log("Selected Date:", date); // Call your function here
  };



  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const lineChartData = {
    labels: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Views',
        data: [50, 139, 100, 110, 120, 150, 160, 170, 180, 200],
        borderColor: '#f87171',
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Clicks',
        data: [20, 80, 60, 65, 70, 85, 90, 100, 110, 140],
        borderColor: '#000000',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Leads',
        data: [10, 60, 40, 50, 60, 75, 80, 90, 100, 120],
        borderColor: '#facc15',
        backgroundColor: 'rgba(250, 204, 21, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { drawBorder: false, color: 'rgba(200, 200, 200, 0.2)' },
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {isSidebarVisible && <Sidebar isVisible={isSidebarVisible} />}

      <main
        className={`flex-1 p-4 space-y-6 ${isSidebarVisible ? 'ml-64' : 'ml-0'
          } transition-all`}
      >
        {/* Header */}
        <Header title="Dashboard" toggleSidebar={toggleSidebar} />

        {/* Top Stats */}
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-5">
          {[
            { label: 'Views', value: 24, color: 'text-red-500' },
            { label: 'Leads', value: 17, color: 'text-yellow-500' },
            { label: 'Clicks', value: 8, color: 'text-black' },
            { label: 'Contact Save', value: 20, color: 'text-red-500' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <h2 className="text-sm font-medium text-gray-500">{stat.label}</h2>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}


          {/* Dropdowns */}
          <div className=" sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-white">
            <select className="border rounded-lg p-2 cursor-pointer"  style={{backgroundColor:'#FF4C4C'}}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select className="border border-0 mt-0 rounded-lg p-2 cursor-pointer" style={{backgroundColor:'#FF4C4C'}}>
              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
            </select>
          </div>
        </div>




        {/* Chart and Filters */}
        <div className="bg-white rounded-lg p-6 shadow-md">

          <div className="flex justify-between items-center mb-6">
            {/* Left-aligned text */}
            <h2 className="text-lg font-bold text-gray-800">
              Performance Overview
            </h2>

            {/* Right-aligned date picker */}
            <div className="flex items-center">
              <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="flex items-center gap-2 p-2 "
              >
                <span className="text-sm font-medium text-gray-600">Change Dates</span>
                <FaCalendarAlt size={18} className="text-gray-600" />
              </button>

              {/* Inline date picker */}
              {isCalendarOpen && (
                <div className="absolute mt-2 right-0 z-10 bg-white shadow-lg rounded-lg">
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    inline
                  />
                </div>
              )}
            </div>
          </div>

          <div className="h-full">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>


        {/* UI Below the Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Events */}

          <div>


            <div className="p-4 border rounded-md bg-white shadow-md">

              <h3 className="font-bold text-gray-800 text-md mb-4">Top Events</h3>
              <ul className="text-sm text-gray-600">
                <li className="flex justify-between mb-2 border-b">
                  <span>Click on Share Button</span>
                  <span>233</span>
                </li>
                <li className="flex justify-between border-b">
                  <span>Contact Exchanged</span>
                  <span>233</span>
                </li>
              </ul>
            </div>

            {/* Click On Section */}
            <div className="p-4 border rounded-md bg-white shadow-md mt-6 lg:grid-cols-1">
              <h3 className="font-bold  text-md mb-4">Click On</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 text-center">
                {/* Icons Section */}
                {[
                  { icon: "📞", label: "233" },
                  { icon: "📧", label: "233" },
                  { icon: "📱", label: "233" },
                  { icon: "🌐", label: "233" },
                  { icon: "📘", label: "233" },
                  { icon: "📸", label: "233" },
                  { icon: "🔗", label: "233" },
                  { icon: "🐦", label: "233" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <span className="block text-xl">{item.icon}</span>
                    <span className="block text-sm text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* Top Locations */}
          <div className="p-4 border rounded-md bg-white shadow-md">
            <h3 className="font-bold text-gray-800 text-md mb-4 flex justify-between">
              Top Locations
              <div className="text-red-500 text-sm">
                <span>Cities</span> | <span className="text-gray-600">Countries</span>
              </div>
            </h3>
            <ul className="text-sm text-gray-600">
              {["Surat", "Ahmedabad", "Vadodara", "Mumbai", "Surat", "Ahmedabad", "Vadodara", "Mumbai"].map((city, index) => (
                <li className="flex justify-between items-center border-b py-2" key={index}>
                  <span className="w-1/2 text-left">{city}</span>
                  <span className="w-1/2 text-right">233</span>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* View By Devices Section */}
        <div className="p-4 border bg-white shadow-md rounded-md  mt-6 flex justify-around text-center">
          {[
            { label: "Mobile", value: "233", color: "text-red-500" },
            { label: "Desktop", value: "233", color: "text-black" },
            { label: "Tablet", value: "233", color: "text-red-500" },
          ].map((item, index) => (
            <div key={index}       className={`text-sm ${index !== 0 ? "border-l pl-4" : ""}`}>
              <span className="block text-white-600">{item.label}</span>
              <span className={`block font-bold ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
