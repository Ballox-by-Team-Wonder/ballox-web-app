import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard3() {

    return (
      <div className="votePercentCard">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Yemi Osinbajo</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">10%</h1>
          </Grid>
          <ProgressBar value={10} />
        </Grid>
        <p className="votePercentCard__votes">1,000 votes</p>
      </div>
    );
}