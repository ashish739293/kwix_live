
import { useState } from 'react';
import BusinessCardList from './BusinessCardList';
import AddNewCardButton from './AddNewCardButton';

const Dashboard = ({ onAddCard, cards }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Digital Business Card</h1>
            <BusinessCardList cards={cards} />
            <AddNewCardButton onAddCard={onAddCard} />
        </div>
    );
};

export default Dashboard;
