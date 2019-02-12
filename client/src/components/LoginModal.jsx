import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function LoginModal(props) {

return(
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
    <p className = "float-right">Not a member? <span>Sign Up</span></p>
    {/* <p className = "float-right">Forgot <span>Password?</span></p> */}
    </Modal.Footer>
    </Modal> 
    )
}

export default LoginModal;