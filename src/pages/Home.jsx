import React from 'react'
import data from '../data';
import { Carduser } from '../components/Carduser';
const Home = () => {
  return (
    <div className=' bg-white w-full gap-4 mt-2 rounded-md h-screen p-1 overflow-visible'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4 ">
      {data.map((element) => (
        <Carduser element={element}/>
      ))}
    </div>
    </div>
  )
}

export default Home;
