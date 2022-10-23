import React from 'react';
import AppInput from '../../shared/input';
import { memo } from 'react';

const EmailComponent = memo((props) =>{       
    return (
        <>
          <AppInput
            required
            type= {"text"}
            name = {"email"}
            placeholder = {"Enter email"}
            className = {"input-item"}       
            value = {props.email} 
            onChange = {props.handleChange} 
          />              
        </>
    )
})
export default EmailComponent;