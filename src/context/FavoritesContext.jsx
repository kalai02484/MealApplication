import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

const STORAGE_KEY = "favoriteMeals";

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const storedFavorites = localStorage.getItem(STORAGE_KEY);
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        }
        catch (error) {
            console.error("Error loading favorites from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));   
        }
        catch (error) {
            console.error("Error saving favorites to localStorage:", error);
        }
    }, [favorites]);

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

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);   
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};

