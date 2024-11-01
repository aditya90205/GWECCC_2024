// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Schedule from "./components/Schedule";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Banner />

      <About />
      <Speakers />
      <Schedule />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default App;
