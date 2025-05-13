
import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

const StatsCard = ({ title, value, icon, description }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4 bg-tour-orange/10 p-3 rounded-full text-tour-orange">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-1 text-tour-orange">{value}</h3>
      <p className="text-lg font-medium mb-2">{title}</p>
      {description && <p className="text-sm text-gray-500 text-center">{description}</p>}
    </div>
  );
};

export default StatsCard;
