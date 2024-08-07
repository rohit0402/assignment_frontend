import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarManagement from "../section/CarManagement";
import Analytics from "../section/Analytics";
import axios from "axios";

const Dashboard = () => {
  const [carana, setCarana] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://assignment-backend-bu2u.onrender.com/api/listCars", {
          withCredentials: true,
        });
        setData(response.data.cars);

        const quantity = response.data.cars.reduce(
          (sum, car) => sum + car.quantity,
          0
        );
        const price = response.data.cars.reduce(
          (sum, car) => sum + car.price * car.quantity,
          0
        );

        setTotalQuantity(quantity);
        setTotalPrice(price);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-start p-1 h-[40vw]">
      <div className="bg-white w-[16vw] rounded-lg">
        <div className="p-2 flex flex-col">
          <span className="flex justify-center font-bold text-xl mr-6 font-serif underline">
            Admin
          </span>
          <div className="flex flex-col m-4 text-lg font-bold font-mono">
            <Link
              to="/create"
              className="rounded-lg px-2 cursor-pointer mb-1 hover:bg-slate-300"
            >
              Add Car
            </Link>
            <span
              className={`rounded-lg px-2 cursor-pointer mb-1 ${
                carana ? "bg-black text-white" : "hover:bg-slate-300"
              }`}
              onClick={() => setCarana(true)}
            >
              Car Management
            </span>
            <span
              className={`rounded-lg px-2 cursor-pointer mb-1 ${
                !carana ? "bg-black text-white" : "hover:bg-slate-300"
              }`}
              onClick={() => setCarana(false)}
            >
              Analytics
            </span>
            <Link
              to={"/"}
              className="hover:bg-slate-300 rounded-lg px-2 cursor-pointer mb-1"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full rounded-lg mx-2">
        {data.length === 0 ? (
          <p className="bg-white w-full gap-4 mt-2 rounded-md h-[40vw] p-1 overflow-visible flex justify-center font-bold text-3xl items-center">
            No Car Available
          </p>
        ) : carana ? (
          <CarManagement data={data} />
        ) : (
          <Analytics totalPrice={totalPrice} totalQuantity={totalQuantity} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
