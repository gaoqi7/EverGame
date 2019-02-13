import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import SignUpContainer from './containers/SignUpContainer';
import LoginContainer from './containers/LoginContainer';
import LogoutFunction from './containers/LogoutFunction';
import API from './util/API';
import Auth from './util/Auth';
import './App.css'
import List from './component/List';








class App extends Component {

  constructor(props, context) {

    super(props, context);

    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleShowSignUp = this.handleShowSignUp.bind(this);
    this.handleClosesignUp = this.handleCloseSignUp.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.handleGet = this.handleGet.bind(this);


    this.state = {
      loginShow: false,
      signUpShow: false,
      authenticated: false,
      query: '',
      apiReturn: []
    }
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }
  fetchData = () => {
    console.log(this.state.query)
    API.search(this.state.query)
      .then(res => {
        console.log(res.data)
        let dataFilter = res.data.filter(el => el.release_dates[el.release_dates.length - 1].date > 1549842737)
        this.setState({ apiReturn: dataFilter });
      })
      .catch(error => { console.log(error) });
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value });
    if (event.target.value.length <= 5) {
      return;
    } else {
      setTimeout(this.fetchData, 300)
    }
  }
  handleShowLogin() {
    this.setState({ loginShow: true })
  }

  handleCloseLogin() {
    this.setState({ loginShow: false })
  }

  handleShowSignUp() {
    this.setState({ signUpShow: true })
  }

  handleCloseSignUp() {
    this.setState({ signUpShow: false });
  }

  handleGet() {
    API.getExample();
  }

  handleLogout() {
    this.setState({ authenticated: false });
    Auth.deauthenticateUser();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (

      <>
        <form>
          <input style={{ border: "blue 2px solid" }}
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <List apiReturn={this.state.apiReturn} />
        <Button onClick={this.handleShowLogin} disabled={this.state.authenticated} id="loginBtn">Login</Button>
        <Button onClick={this.handleShowSignUp} id="signUpBtn">Register</Button>
        <Button onClick={this.handleLogout} disabled={!this.state.authenticated}>Logout</Button>
        {/* <Button onClick = {this.handleGet} id="getBtn">GET igdb</Button> */}

        <SignUpContainer show={this.state.signUpShow} hide={this.handleCloseSignUp.bind(this)} />
        <LoginContainer show={this.state.loginShow} hide={this.handleCloseLogin.bind(this)}
          toggleAuthenticateStatus={this.toggleAuthenticateStatus.bind(this)} />
      </>

    );

  }
}

export default App;
