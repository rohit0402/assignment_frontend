import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarManagement from "../section/CarManagement";
import Analytics from "../section/Analytics";
import data from "../data";
const Dashboard = () => {
  const [carana, setCarana] = useState("false");
  const totalQuantity = data.reduce((sum, car) => sum + car.quantity, 0);

  const totalPrice = data.reduce(
    (sum, car) => sum + car.price * car.quantity,
    0
  );
  
  return (
    <div className=" flex justify-start p-1 h-[40vw]">
      <div className=" bg-white w-[16vw] rounded-lg">
        <div className=" p-2 flex flex-col">
          <span className=" flex justify-center font-bold text-xl mr-6 font-serif underline">
            Admin
          </span>
          <div className=" flex flex-col m-4 text-lg font-bold font-mono">
            <Link to="/create" className=" rounded-lg px-2 cursor-pointer mb-1 hover:bg-slate-300">
              Add Car
            </Link>
            <span
              className={` rounded-lg px-2 cursor-pointer mb-1 ${
                carana ? "bg-black text-white" : "hover:bg-slate-300"
              }`}
              onClick={() => setCarana(true)}
            >
              Car management
            </span>
            <span
              className={`rounded-lg px-2 cursor-pointer mb-1 ${
                !carana ? "bg-black text-white " : "hover:bg-slate-300 "
              }`}
              onClick={() => {
                setCarana(false);
              }}
            >
              Analytics
            </span>
            <Link
              to={"/"}
              className=" hover:bg-slate-300 rounded-lg px-2 cursor-pointer mb-1"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-full rounded-lg mx-2">
        {/* <div className=" bg-white w-full rounded-md h-[10vw] p-2">this</div> */}
        {carana ? (
          <CarManagement />
        ) : (
          <Analytics totalPrice={totalPrice} totalQuantity={totalQuantity} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
