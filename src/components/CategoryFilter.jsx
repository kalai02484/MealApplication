import React, { useState } from "react";

const CategoryFilter = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (e, categoryName) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  const handleAllClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategory(null);
    onCategorySelect(null);
  };

  return (
    <div className="container mx-auto my-4 p-4 flex flex-wrap gap-2 max-w-7xl">
      <button
        type="button"
        onClick={handleAllClick}
        className={selectedCategory === null ? "text-white bg-gradient-to-br from-pink-500 to-orange-400 px-4 py-2 rounded font-medium cursor-pointer" : "text-white bg-gray-400 opacity-60 px-4 py-2 rounded font-medium cursor-pointer"}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category.idCategory}
          onClick={(e) => handleCategoryClick(e, category.strCategory)}
          className={
            selectedCategory === category.strCategory
              ? "text-white bg-gradient-to-br from-pink-500 to-orange-400 px-4 py-2 rounded font-medium cursor-pointer"
              : "text-white bg-gray-400 opacity-60 px-4 py-2 rounded font-medium cursor-pointer"
          }
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
