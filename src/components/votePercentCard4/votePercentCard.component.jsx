import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard4() {

    return (
      <div className="votePercentCard">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Atiku Abubakar</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">35%</h1>
          </Grid>
          <ProgressBar value={35} />
        </Grid>
        <p className="votePercentCard__votes">3,500 votes</p>
      </div>
    );
}