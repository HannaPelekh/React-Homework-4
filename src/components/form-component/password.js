import React from 'react';
import AppInput from '../../shared/input';
import { memo } from 'react';

const PasswordComponent = memo((props) =>{   
    return (
        <>
          <AppInput
            required
            type= {"password"}
            name = {"password"}
            placeholder = {"Enter password"}
            className = {"input-item"}       
            value = {props.password} 
            onChange = {props.handleChange} 
          />              
        </>
    )
})
export default PasswordComponent;