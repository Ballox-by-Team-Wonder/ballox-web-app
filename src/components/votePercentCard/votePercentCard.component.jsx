import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard() {

    return (
      <div className="votePercentCard">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Peter Obi</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">40%</h1>
          </Grid>
          <ProgressBar value={40} />
        </Grid>
        <p className="votePercentCard__votes">4,000 votes</p>
      </div>
    );
}