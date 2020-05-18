import React, { Component } from 'react';
import {Navbar,NavDropdown,Nav,NavItem} from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label} from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

export class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state ={
      isModalOpen:false
    };
    this.toggleModal =this.toggleModal.bind(this);
    this.handleLogin =this.handleLogin.bind(this);
  }
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event){
    this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
  }
  render() {
    return (
      <div>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href="/contactus">Contactus</Nav.Link>
      <Nav.Link href="/aboutus">About us</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Button className="btn-outline-success" onClick={this.toggleModal}>
          <span className="fa fa-sign-in fa-lg"></span>Login
        </Button>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Jumbotron fluid>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
         <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                            <a href="/signup">Don't have an account?</a>
                        </Form>
          </ModalBody>
       </Modal>
      </div>
    )
  }
}

export default HeaderComponent