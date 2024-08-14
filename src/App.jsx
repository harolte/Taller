import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";

// Componente Home
const Home = () => (
  <div className="text-center">
    <Header />
    <img
      src="https://i.ibb.co/CVYFJBM/avatar.webp"
      className="rounded-full w-32 mb-4 mx-auto"
      alt="Avatar"
    />
    <h5 className="text-xl font-medium leading-tight mb-2">Hola Mundo</h5>
    <p className="text-gray-500">Harolt Kruchinsky</p>
    <Footer />
  </div>
);

// Componente Taller
const Taller = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="text-center">
      <Header />
      <img
        src="https://i.ibb.co/BGs3hHY/metaverso.jpg"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Taller"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Adios Mundo</h5>
      <p className="text-gray-500">Harolt Kruchinsky</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGoHome}
      >
        Regresar a Home
      </button>
      <Footer />
    </div>
  );
};

// Componente App
const App = () => {
  const navigate = useNavigate();

  const handleLoadTallerContent = () => {
    navigate('/taller');
  };

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header onLoadTallerContent={handleLoadTallerContent} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taller" element={<Taller />} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <App />
  </Router>
);
