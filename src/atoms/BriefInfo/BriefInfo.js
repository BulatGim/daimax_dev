import './BriefInfo.css';
export default function BriefInfo (props){
    return (
        <div className="brief">
            <p className="brief__title">{props.element.title}</p>
            <p className="brief__subtitle">{props.element.subtitle}</p>
        </div>
    )
}