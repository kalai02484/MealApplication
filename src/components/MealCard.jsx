import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const MealCard = ({meal}) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className="object-cover w-full"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </div>
      <div className="mt-4 px-4 pb-5">
        <h5 className="text-2xl tracking-tight text-slate-900 font-bold mb-5 text-ellipsis overflow-hidden whitespace-nowrap">
          {meal.strMeal}
        </h5>

        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/meal/${meal.idMeal}`}
            className="flex items-center justify-center rounded-md bg-amber-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-blue-300 transition-all duration-200 w-full border-2 border-amber-600 hover:border-amber-500"
          >
            View Details
          </Link>
          <button
            className="flex items-center justify-center rounded-md border-2 border-gray-400 px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-blue-300 transition-all duration-200 cursor-pointer hover:border-red-400"
          >
              <FaHeart className="text-lg text-red-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MealCard
