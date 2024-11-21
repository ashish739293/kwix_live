import BusinessCard from './BusinessCard';

const BusinessCardList = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
                <BusinessCard key={index} card={card} />
            ))}
        </div>
    );
};

export default BusinessCardList;