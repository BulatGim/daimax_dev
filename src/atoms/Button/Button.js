import './Button.css'
export default function Button(props){
    return (
        <button disabled={props.disabled?true:false} type={props.type} className={`button ${props.style}`} style={{width:props.width}} onClick={props.click}>
            <div className="button__img"></div>
            <p className="button__text">{props.text}</p>
        </button>
    )
}