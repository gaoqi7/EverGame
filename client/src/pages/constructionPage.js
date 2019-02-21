import React from "react";
import "./App.css"
import Header from "../components/header/header";
import Logo from "../components/logo/logo";
import Sidebar from "../components/sidebar/sidebar";
import Construction from "../components/construction/construction";

function constructionPage() {
  return (
    <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header />
          <Logo />
          <Construction />
        </div>
    </div>
  );
}

export default constructionPage;