"use client";
import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import TemplateSelection from '@/components/TemplateSelection';
import BusinessCardForm from '@/components/BusinessCardForm';

const Home = () => {
    const [step, setStep] = useState(1);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [cards, setCards] = useState([]);

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

    return (
        <div>
            {step === 1 && <Dashboard cards={cards} onAddCard={handleAddCard} />}
            {step === 2 && <TemplateSelection onSelectTemplate={handleSelectTemplate} />}
            {step === 3 && <BusinessCardForm onSubmit={handleFormSubmit} />}
        </div>
    );
};

export default Home;
