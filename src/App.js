import React, { Component } from 'react';
import Message from './components/message/message';
import UserForm from './components/form-component/form';
import { FormErrors } from './components/form-component/form-errors';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "", 
      formErrors: {email: '', password: '', firstName: '', lastName: ''},  
      showModal: false,      
      emailValid: false,
      passwordValid: false,
      firstNameValid: false,
      lastNameValid: false,
      formValid: false
    } 
  }
  
  handleShow = () => {
    this.setState({showModal: true})
  }
  
  handleHide = () => {
    this.setState({ 
      email: "",
      password: "",
      firstName: "",
      lastName: "",   
      showModal: false});
  }  

  handleChange = (e) => {  
    const name = e.target.name;
    const value = e.target.value;  
    this.setState({[name]: value},
            () => { this.validateField(name, value)});        
  }

  handleSubmit = (e) =>{
        console.log("DATA", this.state)
        this.handleShow()        
        e.preventDefault()     
  }  
    
  validateField(fieldName, value) {
     
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;

  switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/);
        fieldValidationErrors.password = passwordValid ? '': ' is invalid - minimum 1 capital letter, 1 number, maximum 10, minimum 6 characters';
        break;
      case 'firstName':
        firstNameValid = value.match(/^[a-zA-Z]{2,}$/);
        fieldValidationErrors.firstName = firstNameValid ? '' : ' must be at least 2 characters long and contain only letters ';
        break;
        case 'lastName':
        lastNameValid = value.match(/^[a-zA-Z]{2,}$/);
        fieldValidationErrors.lastName = lastNameValid ? '' : ' must be at least 2 characters long and contain only letters';
        break;
      default:
        break;
    }
    this.setState({ 
                    formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    firstNameValid: firstNameValid,
                    lastNameValid: lastNameValid
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: 
      this.state.emailValid && 
      this.state.passwordValid && 
      this.state.firstNameValid && 
      this.state.lastNameValid
    });
  }
  
  render () {
    const message = this.state.showModal ? (
      <Message 
      handleHide = {this.handleHide}
      />  
    ) : null;  
      return (
          <>
            <UserForm             
              handleChange = {this.handleChange} 
              handleSubmit = {this.handleSubmit}              
              email = {this.state.email}
              password={this.state.password}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              formErrors= {this.state.formErrors}
              formValid = {this.state.formValid}
            />
            {message} 
          </>
      )}
}
