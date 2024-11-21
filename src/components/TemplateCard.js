
const TemplateCard = ({ template, onSelectTemplate }) => {
    return (
        <div
            className={`border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ${template.isPremium ? 'border-yellow-500' : 'border-gray-300'
                }`}
            onClick={() => onSelectTemplate(template)}
        >
            <img src={template.preview} alt={template.name} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-semibold">{template.name}</h3>
            {template.isPremium && <span className="text-yellow-500 text-sm">Premium</span>}
        </div>
    );
};

export default TemplateCard;
