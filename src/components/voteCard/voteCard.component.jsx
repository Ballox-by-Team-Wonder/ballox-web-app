import { Link } from 'react-router-dom';
import './voteCard.styles.css';


export function VoteCard({ removeEffect, link }) {

    const component = 
    
    <div className={`voteCard ${removeEffect ? 'voteCard__removeEffect' : ''}`}>
        <Highlighter />
        { !removeEffect && <VoteCount /> }
        <h1 className="voteCard__title">The title of the vote card</h1>
        <p className="voteCard__time">Created 5 days ago</p>
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
            NEWS
        </span>
    )
}

function VoteCount() {

    return (
        <span className="voteCount">0 Votes</span>
    )
}