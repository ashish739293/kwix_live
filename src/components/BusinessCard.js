const BusinessCard = ({ card }) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={card.profilePhoto} alt="Profile" className="w-full h-48 object-cover rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{card.fullName}</h2>
            <p className="text-gray-600">{card.jobTitle}</p>
            <p className="text-gray-600">{card.companyName}</p>
            <p className="text-gray-600">{card.email}</p>
            <p className="text-gray-600">{card.mobileNumber}</p>
            <p className="text-gray-600">{card.shortBio}</p>
            <div className="social-links mt-2">
                {/* Render social links */}
            </div>
            <p className="text-gray-600">{card.aboutMe}</p>
        </div>
    );
};

export default BusinessCard;
