import { Grid } from '@mui/material'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import './availableElections.styles.css'

function AvailableElections() {
    
    return (
        <Grid container>
            <Grid item xs={1} md={2} />

            <Grid item xs={10} md={8}>
                elections
                <VoteCard />
            </Grid>

            <Grid item xs={1} md={2} />
        </Grid>
    )
}

export default AvailableElections