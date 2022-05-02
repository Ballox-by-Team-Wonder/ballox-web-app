import { Grid } from '@mui/material'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import { VotePercentCard } from '../../components/votePercentCard/votePercentCard.component'
import './results.styles.css'

function Results() {

    return (
        <Grid container columns={18}>
            <Grid item xs={2} />

            <Grid item xs={14} md={9}>
                <VoteCard resultPage/>


                <VotePercentCard />
                <VotePercentCard />
            </Grid>

            <Grid item xs={14} md={5}>

            </Grid>

            <Grid item xs={2} />
        </Grid>
    )
}

export default Results