import React, { Component } from "react";
import "./App.css"
import Header from "../components/header/header";
// import List from "../components/list/list";
import Logo from "../components/logo/logo";
import Carousel from "../components/carousel/carousel";
import Sidebar from "../components/sidebar/sidebar";
import API from '../util/API'
// function home() {
class home extends Component {
  state = { userInfo: "" }

  getUserName = (id) => {
    API.getUserName(id)
      .then(data => {
        this.setState({ userInfo: data.data[0].name });
        console.log(this.state.userInfo)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    let d = localStorage.getItem('id')
    if (d) {
      this.getUserName({ id: d })
    }
  }




  handleLogout = () => { console.log("logout") }
  getGameList = () => { console.log("placeholder") }
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header
            handleLogout={this.handleLogout}
            retrieveList={this.getGameList}
          // userName={this.state.userInfo}
          />
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
