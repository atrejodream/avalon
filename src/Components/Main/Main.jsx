import React, { useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import "./Main.css";
import { defaultTheme } from "./Theme";

// Налаштування контейнера карти
const mapContainerStyle = {
  width: "100%",
  height: "100%", // Карта займає 100% висоти батьківського контейнера
};

const defaultOptions = {
  styles: defaultTheme,
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};
// Центр карти
const center = {
  lat: 45.2, // Широта
  lng: 29.5, // Довгота
};

const Main = () => {
  const mapRef = useRef(undefined);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <main className="main-wrapper">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10} // Масштаб карти
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {/* Додаткові елементи, як маркери, можна додати тут */}
      </GoogleMap>
    </main>
  );
};

export default Main;
