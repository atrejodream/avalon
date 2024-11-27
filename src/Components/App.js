import "./App.css";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ["places"];

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <div className="App">
      <Header />
      <div className="main-content-wrapper">
        {isLoaded ? <Map /> : <Preloader />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
