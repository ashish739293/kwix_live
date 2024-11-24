
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TemplateCard = ({ template, onSelectTemplate }) => {
    const { id, name, preview, isPremium, selected } = template;

    return (
        <Card
            className={`overflow-hidden ${selected ? 'ring-2 ring-black' : 'ring-1 ring-gray-200'
                }`}
        >
            <div className="relative">
                <div className="aspect-square bg-gradient-to-b from-gray-900 to-black">
                    {selected && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-sm rounded-full">
                            Selected
                        </div>
                    )}
                    <img
                        src={preview}
                        alt={`${name} Preview`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">{name}</h3>
                {isPremium && (
                    <span className="mt-2 text-xs font-semibold text-yellow-500 uppercase">
                        Premium
                    </span>
                )}
                <Button
                    variant="ghost"
                    className="mt-2 text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => onSelectTemplate(id)}
                >
                    Preview
                </Button>
            </div>
        </Card>
    );
};

export default TemplateCard;