import { useState } from 'react';

const BusinessCardForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        jobTitle: '',
        companyName: '',
        shortBio: '',
        profilePhoto: '',
        coverPhoto: '',
        socialLinks: {
            whatsapp: '',
            website: '',
            facebook: '',
            instagram: '',
            linkedin: '',
            twitter: '',
        },
        aboutMe: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSocialLinkChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            socialLinks: {
                ...formData.socialLinks,
                [name]: value,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Your Details</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
                <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
                <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Short Bio</label>
                <textarea
                    name="shortBio"
                    placeholder="Short Bio"
                    value={formData.shortBio}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Profile Photo</label>
                <input
                    type="file"
                    name="profilePhoto"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Cover Photo</label>
                <input
                    type="file"
                    name="coverPhoto"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">WhatsApp Number</label>
                <input
                    type="text"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    value={formData.socialLinks.whatsapp}
                    onChange={handleSocialLinkChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Website</label>
                <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={formData.socialLinks.website}
                    onChange={handleSocialLinkChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Facebook Link</label>
                <input
                    type="text"
                    name="facebook"
                    placeholder="Facebook Link"
                    value={formData.socialLinks.facebook}
                    onChange={handleSocialLinkChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Instagram Link</label>
                <input
                    type="text"
                    name="instagram"
                    placeholder="Instagram Link"
                    value={formData.socialLinks.instagram}
                    onChange={handleSocialLinkChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn Link</label>
                <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn Link"
                    value={formData.socialLinks.linkedin}
                    onChange={handleSocialLinkChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Twitter Link</label>
                <input
                    type="text"
                    name="twitter"
                    placeholder="Twitter Link"
                    value={formData.socialLinks.twitter}
                    onChange={handleSocialLinkChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">About Me</label>
                <textarea
                    name="aboutMe"
                    placeholder="About Me"
                    value={formData.aboutMe}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Save & Preview
            </button>
        </form>
    );
};

export default BusinessCardForm;
