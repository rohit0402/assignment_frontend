import React from "react";

const Card = ({ element }) => {
  return (
    <div className=" mx-28 lg:mx-auto md:mx-auto w-[80vw]  md:w-[40vw] lg:w-[20vw] mb-4 lg:px-4 py-3 bg-slate-50 rounded-md">
      <div className="overflow-hidden h-48">
        <img
          src={element.carImage}
          alt="image"
          className="w-full h-full bg-slate-200 hover:scale-110 cursor-pointer transition-all ease-in-out rounded-md hover:rounded-b-lg"
        />
      </div>
      <div>
        <div className=" flex m-1 gap-3">
          <span className="text-lg font-bold">{element.model}</span>
          <span>₹{element.price}</span>
          <span>Year:{element.manufacturingYear}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>quantity:{element.quantity}</span>
          <button
            className="bg-slate-500 px-3 ml-16 py-1 rounded-md font-bold"
            // onClick={() => add_to_cart(product)}
          >
            Delete
          </button>
          <button
            className="bg-slate-500 px-3 py-1 rounded-md font-bold"
            // onClick={() => add_to_cart(product)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
