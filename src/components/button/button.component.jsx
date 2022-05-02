import './button.styles.css'

export function Button ({ children, className, clear }) {
    
    return (
        <button className={`button ${clear ? 'button-clear' : ''} ${className}`}>{ children }</button>
    )
}