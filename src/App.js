import logo from './logo.svg';
import './assets/style/index.scss';
import Header from "./components/header";
import React from "react";
import CustomSlider from "./components/slider";
import AboutUs from "./components/aboutUs";

function App() {
  return (
      <div className="">
          <Header/>
          <CustomSlider/>
          <div className="G-container">
              <AboutUs/>
          </div>

      </div>
  );
}

export default App;
