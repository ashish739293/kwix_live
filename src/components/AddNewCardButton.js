import React from 'react';

const AddNewCardButton = ({ onAddCard }) => {
    return (
        <div
            onClick={onAddCard}
            className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <div className="text-gray-400 text-2xl font-semibold">+</div>
            <p className="text-gray-500 mt-2 text-sm font-medium">Add New Card</p>
        </div>
    );
};

export default AddNewCardButton;
