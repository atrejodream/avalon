import React, { useState, useCallback } from "react";
import Map from "./Map/Map";
import Preloader from "../../Preloader/Preloader";
import { useJsApiLoader } from "@react-google-maps/api";
import { Autocomplete } from "../../Autocomplete";
import s from "./HomePage.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ["places"];

const defaultCenter = {
  lat: 45.6426802,
  lng: 25.5887252,
};

const HomePage = () => {
  const [center, setCenter] = useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  return (
    <div className={s.homePage}>
      <div className={s.addressSearchContainer}>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
      </div>
      {isLoaded ? <Map center={center} /> : <Preloader />}
    </div>
  );
};

export default HomePage;
