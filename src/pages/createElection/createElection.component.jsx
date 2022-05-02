import './createElection.styles.css'
import { Input, TextArea } from '../../components/forms/forms.component'
import { Grid } from '@mui/material'
import { Button } from '../../components/button/button.component'


function CreateElection() {

    return (
        <Grid container columns={18}>
            <Grid item xs={2} md={4} />

            <Grid item xs={14} md={10} className="availableElections__content">
                <h1 className="createElection__content-title">Create a poll</h1>
                <p className="createElection__content-subtitle">Complete the fields below to complete your poll.</p>
                
                <TextArea />

                <Input />

                <Button className="createElection__button">Add another option</Button>

            </Grid>

            <Grid item xs={2} md={4} />
        </Grid>
    )
}

export default CreateElection