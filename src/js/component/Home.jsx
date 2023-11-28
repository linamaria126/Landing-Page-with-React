import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container my-4">
        <div className="row d-flex">
          <Card image="https://picsum.photos/150/100" />
          <Card image="https://picsum.photos/151/101" />
          <Card image="https://picsum.photos/152/101" />
          <Card image="https://picsum.photos/152/100" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
