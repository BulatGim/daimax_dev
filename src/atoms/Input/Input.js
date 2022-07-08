import './Input.css';
export default function Input(props) {
    return (
        <div className="input__container">
            <input className="input" type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.handleChange} required></input>
            {props.error?<span className='input__error'>{props.error}</span>:''} 
        </div>
    )
}