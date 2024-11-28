import React, { useRef, useState, useEffect } from "react";
import { GoogleMap } from "@react-google-maps/api";
import s from "./Map.module.css";
import { defaultTheme } from "./ThemeMap";

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

const Map = ({ center }) => {
  const [mapHeight, setMapHeight] = useState("100vh");
  const mapRef = useRef(undefined);

  const updateMapHeight = () => {
    const footer = document.querySelector("footer");
    const footerHeight = footer ? footer.offsetHeight : 0;
    setMapHeight(`calc(100vh - ${footerHeight}px)`);
  };

  useEffect(() => {
    updateMapHeight();
    window.addEventListener("resize", updateMapHeight);

    return () => {
      window.removeEventListener("resize", updateMapHeight);
    };
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <section className={s.mainWrapper}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: mapHeight }}
        center={center}
        zoom={15} // Масштаб карти
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {/* Додаткові елементи, як маркери, можна додати тут */}
      </GoogleMap>
    </section>
  );
};

export default Map;
