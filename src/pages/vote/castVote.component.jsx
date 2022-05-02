import { Grid } from '@mui/material'
import { RadioButton } from '../../components/forms/forms.component'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import { Button } from '../../components/button/button.component'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './castVote.styles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const options = [ { name: 'Jay', value: '1' }, { name: 'Xepha', value: '2' } ]

function CastVote() {
    const [selection, setSelection] = useState("")

    /***************************************************
     * handlers
     **************************************************/

    const handleClick = (option) => {
        setSelection(option)
    }

    return (
        <div className="castVote">
            <Grid container columns={18}>
                <Grid item xs={2} md={4} />

                <Grid item xs={14} md={9}>
                    <VoteCard removeEffect/>

                    { options.map((option, index) => (
                        <RadioButton 
                            key={index}
                            name={option.name}
                            value={option.value}
                            selected={option.value === selection}
                            handleClick={() => handleClick(option.value)}
                        />
                    ))}

                    <Grid item container xs={14} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Button className="castVote__button">Submit your vote</Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Link to="/results">
                                <div className="castVote__jump-to-results">
                                    <span>Jump to results</span> <ChevronRightIcon />
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2} md={5} />
            </Grid>
        </div>
    )
}

export default CastVote