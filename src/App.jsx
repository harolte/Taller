import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <div className="text-center">
    <Header />
      <img
        src="https://i.ibb.co/BGs3hHY/metaverso.jpg"
        className="rounded-full w-32 mb-4 mx-auto"
       
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Adios Mundo</h5>
      <p className="text-gray-500">Harolt kruchinsky</p>
      <Footer />
    </div>
  </div>



);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

