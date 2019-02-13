import React from "react";
import "./App.css"
import Header from "../components/header/header";
import List from "../components/list/list";
import Logo from "../components/logo/logo";
import Carousel from "../components/carousel/carousel";
import Sidebar from "../components/sidebar/sidebar";

function home() {
  return (
    <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header />
          <Logo />
          <Carousel />
          <List />
        </div>
    </div>
  );
}

export default home;
