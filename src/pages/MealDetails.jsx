import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcPrevious } from "react-icons/fc";
import { fetchMealById } from "../api/mealApi";
import LoadingSpinner from "../components/LoadingSpinner";
import {useFavorites} from "../context/FavoritesContext";

function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetchMealById(id)
      .then((res) => setMeal(res.data.meals[0]))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto max-w-7xl mb-4 py-10 px-3">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 flex items-center text-amber-600 hover:text-amber-400 font-medium gap-2"
      >
        <FcPrevious /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT: Images */}
        <div className="lg:sticky top-20 space-y-4">
          <div className="rounded-xl overflow-hidden bg-white p-6 shadow-sm">
            <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
              {meal.strMeal}
            </h1>
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-4">
                {meal.strArea} Cuisine
              </span>
              <button
                onClick={() => toggleFavorite(meal)}
                className={`font-semibold px-3 py-1 rounded-full shadow duration-200 text-xs mb-4 ${isFavorite(meal.idMeal)
                    ? "bg-red-500 hover:bg-red-400 text-white"
                    : "bg-amber-500 hover:bg-amber-400 text-white"}`}
              >
                {isFavorite(meal.idMeal) ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>

            <div className="relative">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        {/* RIGHT: Product Info */}
        <aside className="order-1 lg:order-1">
          <div className="bg-white rounded-xl shadow p-6 lg:p-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              About this Recipe
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {meal.strInstructions}
            </p>

            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Ingredients
            </h3>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];

              // Only render if the ingredient exists and isn't an empty string
              if (ingredient && ingredient.trim() !== "") {
                return (
                  <li
                    key={i}
                    className="flex justify-between border-b pb-1 border-gray-100"
                  >
                    <span className="text-gray-700 font-medium">
                      {ingredient}
                    </span>
                    <span className="text-gray-500 italic">{measure}</span>
                  </li>
                );
              }
              return null;
            })}

            {meal.strYoutube && (
              <div className="my-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Youtube
                </h3>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
                  title={meal.strMeal}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}

            {/* <hr className="my-6" /> */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 mt-8">
              <div>
                <dt className="text-xs text-gray-500">Origin</dt>
                <dd className="mt-1">{meal.strArea}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Category</dt>
                <dd className="mt-1">{meal.strCategory}</dd>
              </div>

              <div>
                <dt className="text-xs text-gray-500">Tags</dt>
                <dd className="mt-1">
                  {meal?.strTags
                    ? meal.strTags.split(",").map((tag) => (
                      <span
                        key={tag}
                        className="inline-block mr-1 px-3 py-1 rounded-sm text-xs bg-amber-100 text-amber-700"
                      >
                        {tag}
                      </span>
                    ))
                    : "No Tags"}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default MealDetails;
