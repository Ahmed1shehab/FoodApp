import React from "react";
import { Route, Routes } from "react-router-dom";
import { MealDetailPage } from "./pages/MealDetailPage";
import { MainPage } from "./pages/MainPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meal/:mealId" element={<MealDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
