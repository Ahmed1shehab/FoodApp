import React from "react";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { Information, NewsletterSection, PopularRecipes, Services, TheBestRecipe } from "../components/content";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <TheBestRecipe />
      <Information />
      <PopularRecipes />
      <Services />
      <NewsletterSection />
      <Footer />
    </div>
  );
};
