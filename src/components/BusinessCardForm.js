"use client";
import React, { useState } from 'react';
// import { Card, CardHeader, CardBody, CardFooter, Button, Input, Textarea, Select } from '@/components/ui';
// import { Card } from './ui/card';
import { Card,CardHeader, CardContent,CardFooter } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select } from './ui/select';
import { Button } from './ui/button';

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
        themeColor: '#FF4C4C',
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

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1">
                <CardHeader>
                    <h1 className="text-2xl font-bold">Add Your Details</h1>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <Input
                        label="Mobile Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                    <Input
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Job Title"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                    <Input
                        label="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                    <Textarea
                        label="Short Bio"
                        name="shortBio"
                        value={formData.shortBio}
                        onChange={handleChange}
                    />
                    <div className="flex gap-4">
                        <Input
                            label="Profile Photo"
                            name="profilePhoto"
                            type="file"
                            onChange={handleChange}
                        />
                        <Input
                            label="Cover Photo"
                            name="coverPhoto"
                            type="file"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-4">
                        <Input
                            label="WhatsApp Number"
                            name="whatsapp"
                            value={formData.socialLinks.whatsapp}
                            onChange={handleSocialLinkChange}
                        />
                        <Input
                            label="Website"
                            name="website"
                            value={formData.socialLinks.website}
                            onChange={handleSocialLinkChange}
                        />
                        <Input
                            label="Facebook Link"
                            name="facebook"
                            value={formData.socialLinks.facebook}
                            onChange={handleSocialLinkChange}
                        />
                        <Input
                            label="Instagram Link"
                            name="instagram"
                            value={formData.socialLinks.instagram}
                            onChange={handleSocialLinkChange}
                        />
                        <Input
                            label="LinkedIn Link"
                            name="linkedin"
                            value={formData.socialLinks.linkedin}
                            onChange={handleSocialLinkChange}
                        />
                        <Input
                            label="Twitter Link"
                            name="twitter"
                            value={formData.socialLinks.twitter}
                            onChange={handleSocialLinkChange}
                        />
                    </div>
                    <Textarea
                        label="About Me"
                        name="aboutMe"
                        value={formData.aboutMe}
                        onChange={handleChange}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="bg-[#FF4C4C] hover:bg-[#e23e3e] text-white">
                        Save &amp; Preview
                    </Button>
                </CardFooter>
            </Card>
            <div className="flex-1">
                <Card className="h-full flex flex-col justify-between">
                    <CardHeader>
                        <h2 className="text-xl font-bold">Business Card Preview</h2>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-center justify-center">
                        <div
                            className="bg-[#252525] rounded-2xl p-4 w-72 h-[480px] relative"
                            style={{ backgroundColor: formData.themeColor }}
                        >
                            <img
                                src="/api/placeholder/320/480"
                                alt="Cover Photo"
                                className="rounded-2xl w-full h-40 object-cover"
                            />
                            <div className="flex flex-col items-center mt-4">
                                <img
                                    src="/api/placeholder/80/80"
                                    alt="Profile Photo"
                                    className="rounded-full w-16 h-16 object-cover -mt-8 border-4 border-white"
                                />
                                <h3 className="text-white text-xl font-bold mt-2">
                                    {formData.fullName}
                                </h3>
                                <p className="text-white text-sm">{formData.jobTitle}</p>
                                <p className="text-white text-sm">{formData.companyName}</p>
                                <p className="text-white text-sm">{formData.mobileNumber}</p>
                                <p className="text-white text-sm">{formData.email}</p>
                                <p className="text-white text-sm">{formData.shortBio}</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center justify-between">
                            <Select
                                label="Theme Color"
                                value={formData.themeColor}
                                onChange={(e) =>
                                    setFormData({ ...formData, themeColor: e.target.value })
                                }
                                options={[
                                    { value: '#FF4C4C', label: 'Red' },
                                    { value: '#4CAF50', label: 'Green' },
                                    { value: '#2196F3', label: 'Blue' },
                                    { value: '#9b59b6', label: 'Purple' },
                                ]}
                            />
                            <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                                Remove Branding
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default BusinessCardForm;