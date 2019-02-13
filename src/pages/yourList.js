import React from "react";
import "./App.css"
import Header from "../components/header/header";
import List from "../components/list/list";
import Logo from "../components/logo/logo";
import Sidebar from "../components/sidebar/sidebar";

function yourList() {
  return (
    <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header />
          <Logo />
          <List />
        </div>
    </div>
  );
}

export default yourList;
