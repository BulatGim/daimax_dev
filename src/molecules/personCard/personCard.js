import "./personCard.css"
import SocialNetworks from "../../atoms/socialNetworks/socialNetworks";

export default function PersonCard(props) {
    return(
        <div className="personCard">
            <div className="cardPreview" style={{background: `url(${props.photo}) center no-repeat`}}>
                <div className="redBG">
                </div>
            </div>
            <p className="personCard__name">{props.name}</p>
            <span className="personCard__post">{props.post}</span>
            <SocialNetworks telegramLink={props.tgLink} VKLink={props.VKlink} behanceLink={props.bhLink} dribbble={props.dribble}/>
        </div>
    )
}