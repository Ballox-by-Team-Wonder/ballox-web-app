import './button.styles.css'

function Button ({ children, className, clear }) {
    
    return (
        <button className={`button ${clear ? 'button-clear' : ''} ${className}`}>{ children }</button>
    )
}

export default Button