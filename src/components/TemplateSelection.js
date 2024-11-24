import React, { useState } from 'react';
// import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TemplateCard from '@/components/TemplateCard';

const TemplateSelection = ({ onSelectTemplate }) => {
    const [templates, setTemplates] = useState([
        {
            id: 1,
            name: 'Standard Business Card',
            preview: '/api/placeholder/240/320',
            isPremium: false,
            selected: true
        },
        {
            id: 2,
            name: 'Standard Business Card',
            preview: '/api/placeholder/240/320',
            isPremium: true,
            selected: false
        },
        {
            id: 3,
            name: 'Standard Business Card',
            preview: '/api/placeholder/240/320',
            isPremium: true,
            selected: false
        },
        {
            id: 4,
            name: 'Standard Business Card',
            preview: '/api/placeholder/240/320',
            isPremium: false,
            selected: false
        }
    ]);

    const handleSelectTemplate = (templateId) => {
        setTemplates(templates.map(template => ({
            ...template,
            selected: template.id === templateId
        })));
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <div className="flex items-center px-6 py-4 bg-white shadow-md border-b">
                <button
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                    onClick={() => alert('Back button clicked!')}
                >
                    ←
                </button>
                <h1 className="text-lg font-semibold text-gray-700 ml-4">Select Theme or Template</h1>
            </div>

            <div className="flex-grow overflow-y-auto px-8 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {templates.map((template) => (
                        <TemplateCard
                            key={template.id}
                            template={template}
                            onSelectTemplate={handleSelectTemplate}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-white px-6 py-4 border-t flex justify-end">
                <Button
                    className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm px-6 py-2 rounded-lg shadow transition-colors"
                    onClick={() => alert('Continue button clicked!')}
                >
                    Select & Continue
                </Button>
            </div>
        </div>
    );
};

export default TemplateSelection;