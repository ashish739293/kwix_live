import BusinessCard from './BusinessCard';
import AddNewCardButton from './AddNewCardButton';

const Dashboard = ({ onAddCard, cards }) => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg">
                    <AddNewCardButton onAddCard={onAddCard} />
                </div>

                {cards.map((card, index) => (
                    <div key={index}>
                        <BusinessCard card={card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
