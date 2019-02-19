import React from "react";
import "./App.css"
import Header from "../components/header/header";
// import List from "../components/list/list";
import Logo from "../components/logo/logo";
import Carousel from "../components/carousel/carousel";
import Sidebar from "../components/sidebar/sidebar";
import history from '../util/history';

class home extends React.Component{

  constructor(){
    super()
    this.reloadHome = this.reloadHome.bind(this);
  }

  reloadHome() {
    history.push('/home');
  }

  render(){
    return (
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header reload={this.reloadHome}/>
          <br></br>
          <Logo />
          <Carousel />
          {/* <List /> */}
        </div>
      </div>
    );
  }
}

export default home;
