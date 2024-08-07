import React, { useEffect, useState } from "react";
import { Carduser } from "../components/Carduser";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/listCars", {
          withCredentials: true,
        });
        setData(response.data.cars);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" bg-white w-full gap-4 mt-2 rounded-md h-screen p-1 overflow-visible">
      {data.length === 0 ? (
          <p className="bg-white w-full gap-4 mt-2 rounded-md h-[40vw] p-1 overflow-visible flex justify-center font-bold text-3xl items-center">
            No Car Available
          </p>
        ) : ( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4 ">
          {data.map((element) => (
            <Carduser element={element} />
          ))}
        </div>)}
     
    </div>
  );
};

export default Home;
