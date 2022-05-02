import { Grid } from '@mui/material'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import { VotePercentCard } from '../../components/votePercentCard/votePercentCard.component'
import { Button } from '../../components/button/button.component'
import './results.styles.css'
import { Link } from 'react-router-dom'

function Results() {

    return (
        <div className="results">
            <div className="results__container">
                <Grid container alignItems="flex-end">
                    <Grid item xs={12} md={7}>
                        <div className="results__inner-container">
                            <VoteCard removeEffect/>

                            <VotePercentCard />
                            <VotePercentCard />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <div className="results__inner-container">
                            <div className="results__vote-count-container">
                                <span>Votes</span><br />
                                <h1 className="results__vote-count">0</h1>
                            </div>
                            <Link to="/cast-vote">
                                <Button className="results__button">Submit your vote</Button>
                            </Link>
                        </div>
                    </Grid>
                    
                </Grid>
            </div>
        </div>
    )
}

export default Results