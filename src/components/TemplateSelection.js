// components/TemplateSelection.js
import TemplateList from './TemplateList';

const TemplateSelection = ({ onSelectTemplate }) => {
    const templates = [
        { id: 1, name: 'Template 1', preview: 'preview1.jpg', isPremium: false },
        { id: 2, name: 'Template 2', preview: 'preview2.jpg', isPremium: true },
        { id: 3, name: 'Template 3', preview: 'preview3.jpg', isPremium: true },
        { id: 4, name: 'Template 4', preview: 'preview4.jpg', isPremium: false },
    ];

    const handleSelectTemplate = (template) => {
        onSelectTemplate(template);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Select Theme or Template</h1>
            <TemplateList templates={templates} onSelectTemplate={handleSelectTemplate} />
        </div>
    );
};

export default TemplateSelection;
