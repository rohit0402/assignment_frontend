import React from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div className="flex justify-center py-8 mt-9 h-screen">
      <form
        // onSubmit={handleFormSubmit}
        className="bg-white rounded-lg p-5 shadow-2xl shadow-slate-500 flex flex-col h-fit gap-3 w-[60vw] lg:w-[20vw] text-sm"
      >
        <span className="text-lg text-gray-600 -mb-1 text-center">
          Update Car Details
        </span>

        <div>
          <label htmlFor="name" className="block text-gray-600">
            Car Model
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="outline-none border rounded-md px-3 w-64 py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Car Model"
            required
            // value={formData.name}
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-gray-600">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="outline-none border rounded-md px-3 py-2 w-64 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Company Name"
            required
            // value={formData.company}
            // onChange={handleInputChange}
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
            // value={formData.price}
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="year" className="block text-gray-600">
            Manufacturing Year
          </label>
          <input
            type="text"
            name="manufacturingYear"
            id="year"
            className="outline-none border rounded-md px-3 w-64 py-2 focus:border-yellow-500 text-black"
            autoComplete="off"
            placeholder="Enter Manufacturing Year (YYYY)"
            pattern="\d{4}"
            maxLength="4"
            required
            // value={formData.manufacturingYear}
            // onChange={handleInputChange}
          />
        </div>

        <div className=" flex  justify-between items-center">
          <button
            type="submit"
            className="outline-none border rounded-md px-3 py-2 text-black bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
          >
            Edit
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

export default Edit;
