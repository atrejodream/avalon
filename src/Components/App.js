import "./App.css";
import Header from "./Header/Header";
import Main from "./Main";
import Footer from "./Footer/Footer";
import React from "react";

let data = {
  header: {
    links: [
      { link: "https://www.google.com", name: "Google" },
      { link: "https://www.google.com", name: "Google" },
      { link: "https://www.google.com", name: "Google" },
      { link: "https://www.google.com", name: "Google" },
    ],
  },
};

const App = () => {
  return (
    <div className="App">
      <Header linkToProps={data.header.links} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
