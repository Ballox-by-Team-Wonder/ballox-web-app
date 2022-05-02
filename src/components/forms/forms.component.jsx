import { Grid } from '@mui/material'
import './forms.styles.css'
import selectedIcon from '../../assets/icons/selected.png'

export function Input({ half, label, handleChange, ...props }) {

    return (
        <Grid item xs={half ? 9 : 18}>
            <label className="form__label" htmlFor="poll option">{label}</label>
            <input 
                type="text" 
                className="form__input" 
                onChange={handleChange}
                { ...props }
            />
        </Grid>
    )
}


export function TextArea({ half, label, handleChange, ...props }) {

    return (
        <Grid item xs={half ? 9 : 18}>
            <label htmlFor="poll option" className="form__label">{label}</label>
            <textarea
                className="form__input form__textarea" 
                onChange={handleChange}
                { ...props }
            />
        </Grid>
    )
}


export function RadioButton({ selected, handleClick, name }) {

    return (
        <div 
            onClick={handleClick} 
            className={`radioButton ${selected ? 'radioButton__selected' : ''}`}
        >
            { selected 
                ? <img src={selectedIcon} alt="" className="radioButton__radio radioButton__radio-image" />
                : <div className="radioButton__radio" />
            }
            
            <div className="radioButton__text">{ name }</div>
        </div>
    )
}