import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MealDetails from "./pages/MealDetails";
import Favorites from "./pages/Favorites";
import TopNavbar from "./components/TopNavbar";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <FavoritesProvider>
          <TopNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/meal/:id" element={<MealDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </FavoritesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
