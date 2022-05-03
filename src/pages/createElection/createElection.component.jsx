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
      <div className="createElection">
        <Grid container columns={18}>
          <Grid item xs={2} md={4} />

          <Grid item xs={14} md={10} className="availableElections__content">
            <h1 className="createElection__content-title">Schedule an Election</h1>
            <p className="createElection__content-subtitle">Complete the fields below to setup your Election</p>

            <TextArea label="Add the title of your election" placeholder="add a good title for the election you are about to schedule" />

            {inputList.map((_, index) => (
              <Input key={index} label="Add candidate's name" placeholder={`add a name ${index + 1}`} value={inputList[index]} handleChange={(event) => handleInputListChange(event, index)} />
            ))}

            <Button className="createElection__button" handleClick={handleAddOption}>
              Add a candidate{" "}
            </Button>
          </Grid>

          <Grid item xs={2} md={4} />
        </Grid>
      </div>
    );
}

export default CreateElection