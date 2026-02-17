import { useEffect, useState } from "react";

const STORAGE_KEY = "favoriteMeals";

const loadFavoritesFromLocalStorage = () => {
    try {
        const storedFavorites = localStorage.getItem(STORAGE_KEY);
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
        console.error("Error loading favorites from localStorage:", error);
        return [];
    }
};

export default function useFavorites() {
    const [favorites, setFavorites] = useState(loadFavoritesFromLocalStorage);

    useEffect(()=>{
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        }
        catch (error) {
            console.error("Error saving favorites to localStorage:", error);
        }
    },[favorites]);

    const toggleFavorite = (meal) => {
        setFavorites((prevFavorites) => {
            const isAlreadyFavorite = prevFavorites.some(fav => fav.idMeal === meal.idMeal);
            if (isAlreadyFavorite) {
                return prevFavorites.filter(fav => fav.idMeal !== meal.idMeal);
            } else {
                return [...prevFavorites, meal];
            }
        });
    };

    const isFavorite = (mealId) => {
        return favorites.some(fav => fav.idMeal === mealId);
    };

    return { favorites, toggleFavorite, isFavorite };

}
