import React from "react";

const Analytics = ({ totalPrice, totalQuantity }) => {
  return (
    <div className="bg-white w-full gap-4 mt-2 rounded-md h-[30vw] p-4 flex flex-col items-center justify-center shadow-md">
      <div className="text-lg font-bold text-gray-800 mb-2">
        Total Cars Worth: <span className="text-blue-500">${totalPrice.toLocaleString()}</span>
      </div>
      <div className="text-lg font-bold text-gray-800">
        Total Number of Cars: <span className="text-blue-500">{totalQuantity}</span>
      </div>
    </div>
  );
};

export default Analytics;
