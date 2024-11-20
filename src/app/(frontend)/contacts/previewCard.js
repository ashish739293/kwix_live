"use client"

import React from "react";
import Image from "next/image";

const ContactCard = () => {
    const handleDownload = () => {
        alert('Download vCard functionality not implemented.');
    };

    const handleViewDigitalCard = () => {
        alert('View Digital Business Card functionality not implemented.');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
                            Contact Details
                        </h2>
                    </div>

                    <div className="flex items-center space-x-2 mb-7">
                        <div className="relative w-7 h-7 rounded-full">
                            <Image
                                src="/Edit_light.svg"
                                alt="User Icon"
                                layout="fill"
                                className="rounded-full"
                            />
                        </div>
                        <div className="relative w-7 h-7 rounded-full">
                            <Image
                                src="/Trash.svg"
                                alt="User Icon"
                                layout="fill"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col-reverse sm:flex-row items-center">
                    {/* Image Section */}
                    <div className="flex flex-col items-center sm:w-1/3 mb-4 sm:mb-0">
                        <div className="relative w-32 h-32 rounded-full bg-gray-200 border-2 border-gray-300">
                            <Image
                                src="/men.jpeg"
                                alt="User Icon"
                                layout="fill"
                                className="rounded-full"
                            />
                        </div>
                        {/* Additional Images */}
                        <div className="flex space-x-2 mt-4">
                            <div className="relative w-8 h-8 rounded-full bg-black border-2 border-gray-300">
                                <Image
                                    src="/Phone.png"
                                    alt="Additional Image 1"
                                    layout="fill"
                                    className="rounded-full p-1"
                                />
                            </div>
                            <div className="relative w-8 h-8 rounded-full bg-black border-2 border-gray-300">
                                <Image
                                    src="/message.png"
                                    alt="Additional Image 2"
                                    layout="fill"
                                    className="rounded-full "
                                />
                            </div>
                            <div className="relative w-8 h-8 rounded-full bg-black border-2 border-gray-300">
                                <Image
                                    src="/mail.png"
                                    alt="Additional Image 3"
                                    layout="fill"
                                    className="rounded-full p-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="sm:w-2/3 text-center sm:text-left ml-16">
                        <h2 className="text-xl font-semibold text-gray-800">Mangukiya Shubh Pareshbhai</h2>
                        <h3 className="">Founder/CEO</h3>
                        <p className="mb-2">Placeaa Private Limited</p>
                        <p className="text-gray-600">Email:</p>
                        <p>shubh.mangukiya01@gmail.com</p>
                        <p className="text-gray-600">Mobile:</p>
                        <p>+9190099331142</p>
                    </div>
                </div>


                {/* Button Section */}
                <div className="flex flex-col-reverse sm:flex-row items-center mt-2">
                    {/* Button Section */}
                    <div className="flex flex-col-reverse sm:flex-row items-center mt-8">
                        <div className="flex justify-center w-full sm:space-x-16">
                            <div className="sm:w-1/2">  {/* 4/12 = 1/3 */}
                                <button
                                    onClick={handleDownload}
                                    className="bg-red-500 text-white w-full px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    Download vCard
                                </button>
                            </div>
                            <div className="sm:w-3/4 ml-8"> {/* Adjust only this button's width */}
                                <button
                                    onClick={handleViewDigitalCard}
                                    className="bg-red-500 text-white w-60 px-6 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    View Digital Business Card
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;