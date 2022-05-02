import { useState } from 'react'
import './createElection.styles.css'
import { Input, TextArea } from '../../components/forms/forms.component'
import { Grid } from '@mui/material'
import { Button } from '../../components/button/button.component'


function CreateElection() {
    const [inputList, setInputList] = useState(["", "", ""])

    /***************************************************
     * handlers
     **************************************************/

    const handleInputListChange = (event, index) => {
        const values = [...inputList]
        values[index] = event.target.value
        setInputList(values)
    }

    const handleAddOption = () => {
        setInputList(prevState => [...prevState, ""])
    }

    return (
        <Grid container columns={18}>
            <Grid item xs={2} md={4} />

            <Grid item xs={14} md={10} className="availableElections__content">
                <h1 className="createElection__content-title">Create a poll</h1>
                <p className="createElection__content-subtitle">Complete the fields below to complete your poll.</p>
                
                <TextArea 
                    label="Poll question"
                    placeholder="Eg. What is your favourite color?"
                />

                { inputList.map((_, index) => (
                    <Input 
                        key={index}
                        label="Poll option"
                        placeholder={`Eg. Option ${index + 1}`}
                        value={inputList[index]}
                        handleChange={(event) => handleInputListChange(event, index)}
                    />
                ))}

                <Button className="createElection__button" handleClick={handleAddOption}>Add another option</Button>

            </Grid>

            <Grid item xs={2} md={4} />
        </Grid>
    )
}

export default CreateElection