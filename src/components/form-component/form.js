import React from 'react';
import EmailComponent from './email';
import PasswordComponent from './password';
import NamesComponent from './names';
import Appbutton from '../../shared/button';
import { FormErrors } from './form-errors';
import './form.css';

export default function UserForm(props) {     
    return (
        <>
            <form onSubmit = {props.handleSubmit}
            className='form-container'>
                <div className="input-container">
                    <div className="error">
                        <FormErrors formErrors={props.formErrors} />
                    </div>                    
                    <EmailComponent
                        handleChange = {props.handleChange}
                        email = {props.email} 
                        formErrors = {props.formErrors}          
                    />                             
                    <PasswordComponent                    
                        handleChange = {props.handleChange}                     
                        password={props.password}
                        formErrors = {props.formErrors}  
                    />
                    <NamesComponent                     
                        handleChange = {props.handleChange}
                        firstName={props.firstName}
                        lastName={props.lastName}
                        formErrors = {props.formErrors}  
                    />
                </div>
                <Appbutton 
                    className={"button btn-primary"}                    
                    type="submit"
                    disabled={!props.formValid}>
                    {"Submit"}                        
                </Appbutton>                
            </form>          
        </>
    )
}
    
       