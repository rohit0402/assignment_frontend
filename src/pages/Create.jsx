import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthContext from "../AuthContext";

const Create = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    model: '',
    carImage: '',
    quantity: '',
    price: '',
    year: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/api/createCar', formData, {
        withCredentials: true
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating car:', error.message);
    }
  };

  if (!isAdmin) {
    return <p>You do not have the necessary permissions to view this page.</p>;
  }

  return (
    <div className="flex justify-center py-6 h-screen">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white rounded-lg p-5 shadow-2xl shadow-slate-500 flex flex-col h-fit gap-3 w-[60vw] lg:w-[20vw] text-sm"
      >
        <span className="text-lg text-gray-600 -mb-1 text-center">
          Enter Car Details
        </span>

        <div>
          <label htmlFor="model" className="block text-gray-600">
            Car Model
          </label>
          <input
            type="text"
            name="model"
            id="model"
            className="outline-none border rounded-md px-3 w-64 py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Car Model"
            required
            value={formData.model}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="carImage" className="block text-gray-600">
            Car Image
          </label>
          <input
            type="text"
            name="carImage"
            id="carImage"
            className="outline-none border rounded-md px-3 w-64 py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Paste Image Url"
            required
            value={formData.carImage}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-gray-600">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="outline-none border rounded-md px-3 w-64  py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Number of Cars"
            required
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-600">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="outline-none border rounded-md px-3 w-64  py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Price"
            required
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="year" className="block text-gray-600">
            Manufacturing Year
          </label>
          <input
            type="text"
            name="year"
            id="year"
            className="outline-none border rounded-md px-3 w-64 py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Manufacturing Year (YYYY)"
            pattern="\d{4}"
            maxLength="4"
            required
            value={formData.year}
            onChange={handleInputChange}
          />
        </div>

        <div className=" flex  justify-between items-center">
          <button
            type="submit"
            className="outline-none border rounded-md px-3 py-2 text-black bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
          >
            Create
          </button>

          <p className="text-s font-bold text-gray-600 flex -mt-1 gap-2">
            <span>Or</span>
            <Link
              to="/dashboard"
              className="text-black hover:underline hover:text-blue-700 cursor-pointer"
            >
              Cancel
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Create;
