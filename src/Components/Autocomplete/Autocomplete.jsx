import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import s from "./Autocomplete.module.css";

export const Autocomplete = ({ isLoaded, onSelect }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        onSelect({ lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className={s.listItem}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  React.useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <div className={s.root} ref={ref}>
      <svg
        className={s.searchIcon}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        id="svg_icon_search"
        fill="#fff"
      >
        <path d="M 10.616 15.71 C 9.332 15.71 7.93 15.116 7.015 14.215 C 6.116 13.305 5.532 12.003 5.52 10.619 C 5.511 9.276 6.11 7.921 7.015 7.015 C 7.921 6.11 9.229 5.532 10.614 5.52 C 11.955 5.513 13.305 6.116 14.215 7.015 C 15.116 7.93 15.71 9.332 15.71 10.616 C 15.71 11.901 15.113 13.305 14.211 14.219 C 13.297 15.118 11.897 15.71 10.616 15.71 Z M 20.427 18.82 L 16.711 15.109 L 16.563 14.961 L 16.683 14.79 C 17.562 13.532 17.98 12.165 17.98 10.616 C 17.98 9.609 17.792 8.672 17.4 7.756 C 17.011 6.833 16.494 6.064 15.829 5.399 C 15.167 4.736 14.398 4.221 13.476 3.83 C 12.556 3.438 11.621 3.247 10.616 3.25 C 9.625 3.246 8.668 3.44 7.756 3.83 C 6.867 4.197 6.08 4.723 5.398 5.399 C 4.734 6.06 4.221 6.832 3.83 7.756 C 3.438 8.672 3.248 9.609 3.25 10.616 C 3.246 11.609 3.44 12.564 3.83 13.476 C 4.197 14.365 4.722 15.152 5.399 15.833 C 6.08 16.51 6.865 17.033 7.754 17.399 C 8.67 17.792 9.609 17.983 10.616 17.98 C 12.12 18 13.557 17.552 14.787 16.683 L 14.958 16.562 L 18.819 20.411 C 19.026 20.651 19.292 20.768 19.611 20.75 C 19.927 20.762 20.195 20.652 20.407 20.415 C 20.656 20.182 20.76 19.942 20.75 19.616 C 20.765 19.299 20.659 19.034 20.427 18.82 Z"></path>
      </svg>
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search "
      />
      {status === "OK" && (
        <ul className={s.suggestions}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
