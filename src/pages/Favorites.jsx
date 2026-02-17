import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto max-w-7xl mb-4 py-10 px-3 text-center">
        <h1 className="text-3xl font-bold mb-4">My Favorites</h1>
        <p className="text-gray-600 mb-4">You haven't added any favorite meals yet.</p>
        <Link to="/" className="text-amber-600 hover:text-amber-400 font-medium">
          Browse meals
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-7xl mb-4 py-10 px-3">
      <h1 className="text-3xl font-bold mb-8">My Favorite Meals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/meal/${meal.idMeal}`}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{meal.strCategory}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Favorites
