//components/TemplateList.js
import TemplateCard from './TemplateCard';

const TemplateList = ({ templates, onSelectTemplate }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
                <TemplateCard
                    key={template.id}
                    template={template}
                    onSelectTemplate={onSelectTemplate}
                />
            ))}
        </div>
    );
};

export default TemplateList;
