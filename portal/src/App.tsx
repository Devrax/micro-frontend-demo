import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "homepage/header";
import Footer from "homepage/footer";

const App = () => (
  <>
    <Header name="From Portal" />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: portal</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
