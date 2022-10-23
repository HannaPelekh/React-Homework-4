export default function Appbutton({children, className, onClick, onSubmit, disabled}) {
    return <button 
    className={className} 
    onClick={onClick}
    onSubmit={onSubmit}
    disabled={disabled}>
        {children}
    </button>;
}