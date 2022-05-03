import { Grid } from '@mui/material'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import './availableElections.styles.css'

function AvailableElections() {
    
    return (
        <Grid container columns={18}>
            <Grid item xs={2} md={4} />

            <Grid item xs={14} md={10} className="availableElections__content">
                <Grid item container justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h1 className="availableElections__content-title">Available Elections</h1>
                        <p className="availableElections__content-time">The below election is only available for verified citizens of the United States of America.</p>
                    </Grid>
                    {/* <Grid item style={{ marginBottom: '50px' }}>menu here</Grid> */}
                </Grid>
                                
                { Array(1).fill().map((_, i) => (
                    <VoteCard key={i} link="/results" />
                ))}

            </Grid>

            <Grid item xs={2} md={4} />
        </Grid>
    )
}

export default AvailableElections