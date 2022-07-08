import './Case.css';
export default function Case(props) {
    return (
        <a target="_blank" href={props.card.link} className="case" style={{ background: `url(${props.card.src}) center no-repeat`,backgroundSize:'100%' }}>
        </a>
    )
}