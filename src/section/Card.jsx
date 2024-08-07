import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Card = ({ element }) => {

  const handleDelete = async () => {
    try {
      await axios.delete(`https://assignment-backend-bu2u.onrender.com/api/deleteCar/${element._id}`, {
        withCredentials: true
      });
      window.location.reload(); 
    } catch (error) {
      console.error('Error deleting car:', error.message);
    }
  };

  return (
    <div className="mx-28 lg:mx-auto md:mx-auto w-[80vw] md:w-[40vw] lg:w-[20vw] mb-4 lg:px-4 py-3 bg-slate-50 rounded-md">
      <div className="overflow-hidden h-48">
        <img
          src={element.carImage}
          alt={element.model}
          className="w-full h-full bg-slate-200 hover:scale-110 cursor-pointer transition-all ease-in-out rounded-md hover:rounded-b-lg"
        />
      </div>
      <div>
        <div className="flex m-1 gap-3">
          <span className="text-lg font-bold">{element.model}</span>
          <span>₹{element.price}</span>
          <span>Year: {element.year}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Quantity: {element.quantity}</span>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-3 ml-4 py-1 rounded-md text-white font-bold hover:bg-red-700"
          >
            Delete
          </button>
          <Link
            to={`/edit/${element._id}`} 
            className="bg-blue-500 px-3 py-1 rounded-md text-white font-bold hover:bg-blue-700"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
