import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import API from './util/API';
import './App.css'




class App extends Component {

  constructor(props, context) {

    super(props, context);

    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    this.handleShowRegister = this.handleShowRegister.bind(this);
    this.handleCloseRegister = this.handleCloseRegister.bind(this);
    this.handleRegisterInput = this.handleRegisterInput.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);

    this.handleGet = this.handleGet.bind(this);

    this.state = { 
      query: '', 
      loginShow: false,
      registerShow: false,
      login: {
        email: {value: ''},
        password: {value: ''}
      },
      register: {
        newEmail: {value: ''},
        newPassword: {value: ''},
        newName: {value: ''}
      }
        // remember: false
      
      // formControls: {
      //     email: {value: ''},
      //     name: {value: ''},
      //     password: {value: ''}
      // }
    }
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value });
    API.search("final");

  }

  handleShowLogin() {
    this.setState({loginShow: true})
  }

  handleCloseLogin() {
    this.setState({loginShow: false})
  }

  handleShowRegister() {
    this.setState({registerShow: true})
  }

  handleCloseRegister() {
    this.setState({registerShow: false})
  }

  handleLoginInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedInput = {
      ...this.state.login
    };
    const updatedFormElement = {
      ...updatedInput[name]
    };
    updatedFormElement.value = value;
    updatedInput[name] = updatedFormElement;

    this.setState({
      login: updatedInput
    });
  }

  handleRegisterInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedInput = {
      ...this.state.register
    };
    const updatedFormElement = {
      ...updatedInput[name]
    };
    updatedFormElement.value = value;
    updatedInput[name] = updatedFormElement;
    this.setState({
      register: updatedInput
    }); 
  }

  handleLoginSubmit() {
    // call post users/login
    API.login(this.state.login);
  }

  handleRegisterSubmit() {
    API.register(this.state.register);
  }

  handleGet() {
    API.getExample();
  }

  render() {
    return (
      <div className = "wrapper">
        <form>
          <input style={{ border: "blue 2px solid" }}
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleInputChange}

          />
        </form>
          <Button onClick = {this.handleShowLogin} id="loginBtn">Login</Button>
          <Button onClick = {this.handleShowRegister} id="registerBtn">Register</Button>
          <Button onClick = {this.handleGet} id="registerBtn">GET igdb</Button>
            {/* Login Modal */}
            <Modal show = {this.state.loginShow} onHide = {this.handleCloseLogin} id="loginModal" animation={true}>
              <Modal.Header closeButton className="modal-header">
                {/* <Button onClick = {this.handleCloseLogin}>&times;</Button> */}
                <h4><span className="glyphicon glyphicon-lock"></span> Login</h4>
              </Modal.Header>
              <Modal.Body className = "modal-body">
                <Form onSubmit = {this.handleLoginSubmit} role="form">
                  <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-user"></span> Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.login.email.value} onChange={this.handleLoginInput}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-eye-open"></span> Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" value={this.state.login.password.value} onChange={this.handleLoginInput} />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" name="remember" label="Remember me" />
                  </Form.Group>
                  <p className = "text-danger float-left">Incorrect username or password</p>
                  <Button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span> Login</Button>
                </Form>
              </Modal.Body>
              <Modal.Footer className = "modal-footer">
                <Button type="submit" className="btn btn-danger btn-default pull-left" onClick = {this.handleCloseLogin}><span className="glyphicon glyphicon-remove"></span> Cancel</Button>
                <p className = "float-right">Not a member? <Link to={'/signup'}>Sign Up</Link></p>
                {/* <p className = "float-right">Forgot <span>Password?</span></p> */}
              </Modal.Footer>
            </Modal> 

            {/* Register Modal */}
            <Modal show = {this.state.registerShow} onHide = {this.handleCloseRegister} id="registerModal" animation={true}>
              <Modal.Header closeButton className="modal-header">
                <h4><span className="glyphicon glyphicon-lock"></span> Register</h4>
              </Modal.Header>
              <Modal.Body className = "modal-body">
                <Form onSubmit = {this.handleRegisterSubmit} role="form">
                  <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-user"></span> Email address</Form.Label>
                    <Form.Control type="email" name="newEmail" placeholder="Enter email" value={this.state.register.newEmail} onChange={this.handleRegisterInput}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-eye-open"></span> Username</Form.Label>
                    <Form.Control type="text" name="newName" placeholder="Enter username" value={this.state.register.newName} onChange={this.handleRegisterInput} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-eye-open"></span> Password</Form.Label>
                    <Form.Control type="password" name="newPassword" placeholder="Enter password" value={this.state.register.newPassword} onChange={this.handleRegisterInput} />
                  </Form.Group>
                  <Button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span> Register</Button>
                </Form>
              </Modal.Body>
              <Modal.Footer className = "modal-footer">
                <Button type="submit" className="btn btn-danger btn-default pull-left" onClick = {this.handleCloseRegister}><span className="glyphicon glyphicon-remove"></span> Cancel</Button>
              </Modal.Footer>
            </Modal> 
          
      </div>
    );

  }
}

export default App;
