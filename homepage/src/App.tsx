import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
  <>
    <Header name="Klk" />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: homepage</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
