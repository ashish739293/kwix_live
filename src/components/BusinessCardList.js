import BusinessCard from './BusinessCard';

const BusinessCardList = ({ cards }) => {
    return (
        <>
            {cards.map((card, index) => (
                <BusinessCard key={index} card={card} />
            ))}
        </>
    );
};

export default BusinessCardList;
