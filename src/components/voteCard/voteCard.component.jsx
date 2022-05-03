import { Link } from 'react-router-dom';
import './voteCard.styles.css';


export function VoteCard({ removeEffect, link }) {

    const component = 
    
    <div className={`voteCard ${removeEffect ? 'voteCard__removeEffect' : ''}`}>
        <Highlighter />
        { !removeEffect && <VoteCount /> }
        <h1 className="voteCard__title">Presidential Election of the United States of America</h1>
        <p className="voteCard__time">Created 1 day ago</p>
    </div>

    return !link ? (
        component 
    ) : (
        <Link to={link}>
            { component }
        </Link>
    )
}

function Highlighter() {
    
    return (
        <span className="highlighter">
            Live Election
        </span>
    )
}

function VoteCount() {

    return (
        <span className="voteCount">10,000 Votes</span>
    )
}