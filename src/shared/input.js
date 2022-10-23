export default function AppInput({type, name, placeholder, className, value, onChange, onBlur}) {
    return <input 
    type= {type}
    name = {name}
    placeholder = {placeholder}
    className = {className}       
    value = {value}     
    onChange = {onChange}    
    onBlur = {onBlur} 
    />    
}