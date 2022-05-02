import { Grid } from '@mui/material'
import { RadioButton } from '../../components/forms/forms.component'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import './castVote.styles.css'


function CastVote() {

    return (
        <Grid container columns={18}>
            <Grid item xs={2} md={4} />

            <Grid item xs={14} md={9}>
                <VoteCard removeEffect/>

                <RadioButton selected />
                <RadioButton />
            </Grid>

            <Grid item xs={2} md={5} />
        </Grid>
    )
}

export default CastVote