import React, { useEffect, useState } from "react";
import HomeBannerBg from "../assets/HomeBannerBg.jpg";
import logo from "../assets/logo.png";
import SearchBar from "../components/SearchBar";
import { fetchCategories, fetchInitialMeals, searchMeals, fetchMealsByCategory } from "../api/mealApi";
import LoadingSpinner from "../components/LoadingSpinner";
import CategoryFilter from "../components/CategoryFilter";
import MealCard from "../components/MealCard";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInitialMeals()
      .then((res) => setMeals(res.data.meals || []))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });

    fetchCategories()
      .then(
        (res) =>
          console.log(res.data.categories) ||
          setCategories(res.data.categories),
      )
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    searchMeals(query)
      .then((res) => {
        setMeals(res.data.meals || []);
      })
      .catch((err) => {
        console.log(err);
        setMeals([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCategorySelect = (categoryName) => {
    setLoading(true);
    if (categoryName === null) {
      // Show all meals
      fetchInitialMeals()
        .then((res) => {
          setMeals(res.data.meals || []);
        })
        .catch((err) => {
          console.log(err);
          setMeals([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Fetch meals by category
      fetchMealsByCategory(categoryName)
        .then((res) => {
          setMeals(res.data.meals || []);
        })
        .catch((err) => {
          console.log(err);
          setMeals([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (loading && meals.length === 0) return <LoadingSpinner />;

  return (
    <>
      <div
        className="relative w-full flex justify-center items-center bg-cover h-96 flex-col mb-10"
        style={{ backgroundImage: `url(${HomeBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-xl md:text-5xl text-center relative text-white font-light flex flex-col items-center justify-center">
          <img src={logo} className=" h-30" alt="Logo" />
        </div>
        <p className="text-white text-center text-lg md:text-xl font-light relative mb-6">
          Discover delicious recipes from around the world
        </p>

        <div className="max-w-5xl relative">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl mb-4">
        <h2 className="text-2xl font-semibold mb-1 px-4">Explore Categories</h2>
        <CategoryFilter categories={categories} onCategorySelect={handleCategorySelect} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl mb-8">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No meals found. Try searching for something else!
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
