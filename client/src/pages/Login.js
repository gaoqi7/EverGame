import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import SignUpContainer from '../components/loginComponents/containers/SignUpContainer';
import LoginContainer from '../components/loginComponents/containers/LoginContainer';
import LogoutFunction from '../components/loginComponents/containers/LogoutFunction';
import Auth from '../util/Auth';
import './App.css';
import API from '../util/API'


class Login extends Component {

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
            authenticated: false
        }
    }

    componentDidMount() {
        // check if user is logged in on refresh
        this.toggleAuthenticateStatus();
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

            <div className="loginDiv">
                <Button onClick={this.handleShowLogin} disabled={this.state.authenticated} className="loginBtn btn btn-warning">Login</Button>
                <Button onClick={this.handleShowSignUp} className="signUpBtn btn btn-warning">Register</Button>
                <Button onClick={this.handleLogout} disabled={!this.state.authenticated} className="logoutBtn btn btn-warning">Logout</Button>
                {/* <Button onClick = {this.handleGet} id="getBtn">GET igdb</Button> */}
                <SignUpContainer show={this.state.signUpShow} hide={this.handleCloseSignUp.bind(this)} />
                <LoginContainer show={this.state.loginShow} hide={this.handleCloseLogin.bind(this)}
                    toggleAuthenticateStatus={this.toggleAuthenticateStatus.bind(this)} />
            </div>

        );

    }
}

export default Login;
