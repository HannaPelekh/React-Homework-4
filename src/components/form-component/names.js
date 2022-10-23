import React from 'react';
import AppInput from '../../shared/input';
import { memo } from 'react';

const NamesComponent = memo((props) =>{    
    return (
        <>
          <AppInput 
            required
            type= {"text"}
            name = {"firstName"}
            placeholder = {"Enter first mame"}
            className = {"input-item"}       
            value = {props.firstName} 
            onChange = {props.handleChange}  
            />              
            <AppInput 
            required
            type= {"text"}
            name = {"lastName"}
            placeholder = {"Enter last mame"}
            className = {"input-item"}       
            value = {props.lastName} 
            onChange = {props.handleChange} 
            />                
        </>
    )
})
export default NamesComponent;