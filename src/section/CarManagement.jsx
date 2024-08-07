import React, { useState } from 'react';
import Card from './Card';
import data from '../data';
import Pagination from '../pages/Pagination';

const CarManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const totalPages = Math.ceil(data.length / carsPerPage);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = data.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-white w-full gap-4 mt-2 rounded-md h-[40vw] p-1 overflow-visible'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4">
        {currentCars.map((element) => (
          <Card key={element.carNumber} element={element} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={paginate} />
    </div>
  );
}

export default CarManagement;