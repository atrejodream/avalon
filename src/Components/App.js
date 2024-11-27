import Header from "./Header/Header";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import React from "react";
import s from "./App.module.css";
import { useJsApiLoader } from "@react-google-maps/api";
import { Autocomplete } from "./Autocomplete";

//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ["places"];

const defaultCenter = {
  lat: 45.6426802,
  lng: 25.5887252,
};

const App = () => {
  const [center, setCenter] = React.useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaseSelect = React.useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  return (
    <div className={s.App}>
      <Header />
      <main className={s.mainContentWrapper}>
        <div className={s.addressSearchContainer}>
          <Autocomplete isLoaded={isLoaded} onSelect={onPlaseSelect} />
        </div>
        {isLoaded ? <Map center={center} /> : <Preloader />}

        <Footer />
      </main>
    </div>
  );
};

export default App;
