import React, { useState } from "react";
import { data } from "../data/data";

export const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Manu Items
      </h1>
      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => setFoods(data)} className="btn-foods">
              All
            </button>
            <button onClick={() => filterType("burger")} className="btn-foods">
              Burgers
            </button>
            <button onClick={() => filterType("pizza")} className="btn-foods">
              Pizza
            </button>
            <button onClick={() => filterType("salad")} className="btn-foods">
              Salads
            </button>
            <button onClick={() => filterType("chicken")} className="btn-foods">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => filterPrice("$")} className="btn-foods">
              $
            </button>
            <button onClick={() => filterPrice("$$")} className="btn-foods">
              $$
            </button>
            <button onClick={() => filterPrice("$$$")} className="btn-foods">
              $$$
            </button>
            <button onClick={() => filterPrice("$$$$")} className="btn-foods">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
