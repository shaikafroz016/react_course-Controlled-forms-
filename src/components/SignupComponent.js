import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';


class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            touched: {
                firstname:false,
                lastname:false,
                password:false,
                email:false
            }
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]:true}
        });
    }

    validate(firstname, lastname, password, email) {
        const errors = {
            firstname: '',
            lastname: '',
            password: '',
            email: ''
        };

        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = "First Name should be greater than 3 characters";
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = "First Name should be less than 10 characters";
        
        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = "Last Name should be greater than 3 characters";
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = "Last Name should be less than 10 characters";
        
        if(this.state.touched.password && password.length < 6)
            errors.password = "pasword must be greatre than 6 caracter";
        else if(this.state.touched.password && password.length > 8)
            errors.lastname = "password must be leeser than 8 caharcter";
        
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "Invalid Email";

        return errors;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is :" + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.password, this.state.email)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Sign up</h3>
                        <hr />
                    </div> 
                </div>
                
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2} > First Name </Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" 
                                        placeholder="First Name" 
                                        value={this.state.firstname} 
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname} 
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>password</Label>
                                <Col md={10}>
                                    <Input type="password" id="password" name="password"
                                        placeholder="password"
                                        value={this.state.password} 
                                        valid={errors.password === ''}
                                        invalid={errors.password !== ''}
                                        onBlur={this.handleBlur('password')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email} 
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                <Button  type="submit" href="/home">Sign Up</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            
        );
    }
}

export default Signup;