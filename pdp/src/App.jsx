import React from "react";
import ReactDOM from "react-dom";

import SafeComponent from "./components/SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";

import "./index.scss";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>

      <div className="my-10">PDP Page Content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
