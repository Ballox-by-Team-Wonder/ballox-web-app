import { Grid } from '@mui/material'
import './forms.styles.css'

export function Input({ half }) {

    return (
        <Grid item xs={half ? 9 : 18}>
            <label className="form__label" htmlFor="poll option">Poll Option</label>
            <input 
                type="text" 
                className="form__input" 
                placeholder="Eg. Option 1"
            />
        </Grid>
    )
}


export function TextArea({ half }) {

    return (
        <Grid item xs={half ? 9 : 18}>
            <label htmlFor="poll option" className="form__label">Poll Option</label>
            <textarea
                type="text" 
                className="form__input form__textarea" 
                placeholder="Eg. Option 1"
            />
        </Grid>
    )
}