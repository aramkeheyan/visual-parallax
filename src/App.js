import logo from './logo.svg';
import './assets/style/index.scss';
import Header from "./components/header";
import React from "react";
import CustomSlider from "./components/slider";

function App() {
  return (
		  <div className="">
			  <Header/>
			  <CustomSlider/>
		  </div>
  );
}

export default App;
