import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Navigation from "../Components/Navigation";

function HomePage() {
  return (
    <div className='Page-layout'>
      <Header />
      <Home />
      <Navigation />
    </div>
  );
}

export default HomePage;
