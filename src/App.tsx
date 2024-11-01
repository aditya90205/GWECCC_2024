// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Schedule from "./components/Schedule";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Banner />

      <About />
      <Schedule />
      <RegistrationForm />
    </div>
  );
};

export default App;
