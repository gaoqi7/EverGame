import React, { Component } from "react";
import "./App.css"
import Header from "../components/header/header";
import List from "../components/list/list";
import Logo from "../components/logo/logo";
import Sidebar from "../components/sidebar/sidebar";
import SearchWidget from '../components/SearchWidget/SearchWidget'
import API from '../util/API'

class yourList extends Component {
  state = { data: {} }
  getGameList = () => {
    API.sendId()
      .then((res) => {
        this.setState({ data: res });
        console.log("userlist from db")
        console.log(this.state.data)
      })
  }

  componentDidMount() {
    this.getGameList()
  }

  render() {
    return (
      <div className="wrapper" >
        <Sidebar />
        <div id="content">
          <Header />
          <Logo />
          <SearchWidget />
          <div className="listDiv">
            {this.state.data.data === undefined ? <p>Sorry , we are loading...</p> : this.state.data.data.map(elem => <List data={elem} key={elem._id} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default yourList;
