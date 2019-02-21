import React, { Component } from "react";
import "../sidebar/sidebar.css";
import API from "../../util/API"


class Sidebar extends Component {

    state = {
        userInfo: "",
        authenticated: false
      }
    
      getUserName = (id) => {
        API.getUserName(id)
          .then(data => {
            this.setState({ userInfo: data.data[0].name });
            this.setState({ authenticated: true });
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

    render () {

    let yourPage = null;
    const { authenticated } = this.state;

    if(authenticated) {
        yourPage = 
        <li>
            <a href="/yourList">
                <i className="fas fa-list iconSpacing"></i>
                Your List
            </a>
        </li>
    }
    else {
        yourPage = null;
    }

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3 className="heading">EverGame</h3>
                <strong>EG</strong>
            </div>
            <ul className="list-unstyled components">
                {yourPage}
                <li>
                    <a href="/home">
                        <i className="fas fa-home iconSpacing"></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/construction">
                        <i className="fas fa-exclamation-triangle iconSpacing"></i>
                        Genres
                    </a>
                </li>
                <li>
                    <a href="/construction">
                        <i className="fas fa-exclamation-triangle iconSpacing"></i>
                        Concerts
                    </a>
                </li>
                <li>
                    <a href="/construction">
                        <i className="fas fa-exclamation-triangle iconSpacing"></i>
                        Events
                    </a>
                </li>
                <li>
                    <a href="/construction">
                        <i className="fas fa-exclamation-triangle iconSpacing"></i>
                        Movies
                    </a>
                </li>
    
            </ul>
        </nav>
    )}
}


export default Sidebar;