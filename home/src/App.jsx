import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
