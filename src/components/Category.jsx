import React, { useState } from "react";
import { categories } from "../data/data";

export const Category = () => {
  console.log(categories);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <h1 className="font-bold text-orange-600 text-center text-4xl">
        Top Rated Menu Items
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-2xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
