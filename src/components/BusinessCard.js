const BusinessCard = ({ card }) => {
    const { name, title, email, phone, image } = card;

    return (
        <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
            {/* Header Section */}
            <div className="flex items-center justify-between w-full mb-4">
                {/* Name and Title */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>

                {/* Profile Image */}
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 overflow-hidden">
                    <img
                        src={image}
                        alt={`${name}'s profile`}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full mt-2 space-y-2">
                {/* Email */}
                <div className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12v-4M8 12v-4M21 8l-9 6-9-6"
                        />
                    </svg>
                    <span className="text-sm text-gray-600">{email}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h18M10 3l3 3-3 3M14 21h-4m5-2l3-3-3-3"
                        />
                    </svg>
                    <span className="text-sm text-gray-600">{phone}</span>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between w-full mt-4 border-t border-gray-200 pt-3">
                <button
                    className="text-sm font-medium text-gray-700 hover:text-indigo-500 w-1/3 text-center"
                    onClick={() => alert('Edit button clicked!')}
                >
                    Edit
                </button>
                <button
                    className="text-sm font-medium text-gray-700 hover:text-indigo-500 w-1/3 text-center"
                    onClick={() => alert('View button clicked!')}
                >
                    View
                </button>
                <button
                    className="text-sm font-medium text-gray-700 hover:text-indigo-500 w-1/3 text-center"
                    onClick={() => alert('Share button clicked!')}
                >
                    Share
                </button>
            </div>
        </div>
    );
};

export default BusinessCard;
