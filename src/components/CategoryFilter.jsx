import { Button } from "flowbite-react";
import React from "react";

const CategoryFilter = ({ categories}) => {
  return (
    <div className="container mx-auto my-4 p-4 flex flex-wrap gap-2 max-w-7xl">
      <Button
        className={"text-white bg-linear-to-br from-pink-500 to-orange-400"}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
         key={category.idCategory}
          className={
            "bg-white text-amber-500 border-amber-400 border-2 hover:bg-linear-to-bl focus:outline-none"
          }
        >
          {category.strCategory}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
