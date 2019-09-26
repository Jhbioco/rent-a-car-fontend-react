import React from "react";
import Header from "./components/header/header";
import Search from "./components/main/sectionOne/search";
import Banner from "./components/main/sectionTwo/banner";
import Option from "./components/main/sectionThree/option";
import Brands from "./components/main/sectionFour/brands";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Option></Option>
      <Brands></Brands>
    </div>
  );
}

export default App;
