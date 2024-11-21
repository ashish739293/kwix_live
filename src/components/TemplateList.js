import TemplateCard from './TemplateCard';

const TemplateList = ({ templates, onSelectTemplate }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
                <TemplateCard key={template.id} template={template} onSelectTemplate={onSelectTemplate} />
            ))}
        </div>
    );
};

export default TemplateList;
