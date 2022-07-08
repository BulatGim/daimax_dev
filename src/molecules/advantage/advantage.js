import  "./advantage.css";

export default function Advantage(props) {
    return(
        <div className="advantage">
            <h4 className="advantage__title">{props.title}</h4>
            <p className="advantage__description">{props.description}</p>
        </div>
    )
}