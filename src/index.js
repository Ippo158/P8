import React from "react";
import ReactDOM from "react-dom/client";
import "../src/CSS/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import Logement from "./Pages/Logement";
import A_propos from "./Pages/A_propos";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <div className="main-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/A_propos" element={<A_propos />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
