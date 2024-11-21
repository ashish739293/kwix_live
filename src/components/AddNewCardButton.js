
const AddNewCardButton = ({ onAddCard }) => {
    return (
        <button
            onClick={onAddCard}
            className="mt-4 bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Add New Card
        </button>
    );
};

export default AddNewCardButton;
