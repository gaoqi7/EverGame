import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import API from './util/API';




class App extends Component {

  state = { 
    query: '', 
    loginShow = false 
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value });
    API.search("final");

  }

  handleShowLogin() {
    this.setState({loginShow = true})
  }

  handleCloseLogin() {
    this.setState({loginShow = false})
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
        <Container>
          <Button onClick = {this.handleShowLogin} id="loginBtn">Login</Button>
            <Modal show = {this.state.loginShow} onHide = {this.state.loginHide} id="loginModal" role="dialog">
              <Modal.Dialog>
                <Modal.Header closeButton id="modal-header" style="padding:35px 50px;">
                  <Button onClick = {this.handleCloseLogin}>&times;</Button>
                  <h4><span className="glyphicon glyphicon-lock"></span> Login</h4>
                </Modal.Header>
                <Modal.Body style="padding:40px 50px;">
                  <Form onSubmit = "users/login" method = "post" role="form">
                    <Form.Group>
                      <label for="usrname"><span className="glyphicon glyphicon-user"></span> Username</label>
                      <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                      <label for="psw"><span className="glyphicon glyphicon-eye-open"></span> Password</label>
                      <input type="text" className="form-control" id="psw" placeholder="Enter password" />
                    </Form.Group>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" checked>Remember me</input></label>
                    </div>
                    <Button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span> Login</Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer id = "modal-footer">
                  <Button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span> Cancel</Button>
                  <p>Not a member? <Link to={'/signup'}>Sign Up</Link></p>
                  <p>Forgot <a href="#">Password?</a></p>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal> 
          </Container>
      </div>
    );

  }
}

export default App;
