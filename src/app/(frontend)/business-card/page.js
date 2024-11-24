

"use client";
import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import TemplateSelection from '@/components/TemplateSelection';
import BusinessCardForm from '@/components/BusinessCardForm';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const Home = () => {
    const [step, setStep] = useState(1);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [cards, setCards] = useState([
        {
            name: 'Shubh Mangukiya',
            title: 'Founder/CEO of Placeaa',
            email: 'shubh.mangukiya01@gmail.com',
            phone: '+919099331142',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'John Doe',
            title: 'Software Engineer',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            image: 'https://via.placeholder.com/150',
        },
    ]);
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const handleAddCard = () => {
        setStep(2);
    };

    const handleSelectTemplate = (template) => {
        setSelectedTemplate(template);
        setStep(3);
    };

    const handleFormSubmit = (formData) => {
        const newCard = { ...formData, template: selectedTemplate };
        setCards([...cards, newCard]);
        setStep(1);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className="flex min-h-screen bg-gray-50">
            {isSidebarVisible && <Sidebar isVisible={isSidebarVisible} />}
            <main
                className={`flex-1 p-4 space-y-6 ${isSidebarVisible ? 'ml-64' : 'ml-0'
                    } transition-all`}
            >
                <Header title="Digital Business Card" toggleSidebar={toggleSidebar} />
                {step === 1 && <Dashboard cards={cards} onAddCard={handleAddCard} />}
                {step === 2 && <TemplateSelection onSelectTemplate={handleSelectTemplate} />}
                {step === 3 && <BusinessCardForm onSubmit={handleFormSubmit} />}
            </main>
        </div>
    );
};

export default Home;
