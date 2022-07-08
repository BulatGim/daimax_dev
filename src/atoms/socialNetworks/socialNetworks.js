import "./socialNetworks.css";

export default function SocialNetworks(props) {
    return(
        <div className="socialNetworks">
            <a href={props.telegramLink} className={props.telegramLink?"telegramLink socialNetworks__item": ""}></a>
            <a href={props.VKLink} className={props.VKLink?"VKLink socialNetworks__item": ""}></a>
            <a href={props.behanceLink} className={props.behanceLink?"behanceLink socialNetworks__item": ""}></a>
            <a href={props.dribbble} className={props.dribbble?"dribbble socialNetworks__item": ""}></a>
        </div>
    )
}