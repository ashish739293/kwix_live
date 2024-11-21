// components/StatCard.js

export default function StatCard({ title, value }) {
   return (
      <div className="stat-card bg-white text-center rounded-lg shadow-lg p-4">
         <h3 className="title text-lg font-semibold text-gray-700 mb-2">{title}</h3>
         <p className="value text-3xl font-bold text-red-500">{value}</p>
      </div>
   );
}
