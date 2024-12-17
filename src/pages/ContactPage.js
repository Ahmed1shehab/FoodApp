import React from "react";
import { Header } from "../components/layouts/Header";
import { Contact } from "../components/content";

export const ContactPage = () => {
  return (
    <>
      <Header /> {/* Render Header component */}
      <Contact /> {/* Render Contact component */}
    </>
  );
};
