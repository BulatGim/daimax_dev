import { NavLink } from "react-router-dom";
import './Link.css';
export default function LinkMenu(props) {
    return (

        <div className="link">
            <NavLink className={({ isActive }) => (isActive ? "link__text_active" : "link__text")} style={props.style} to={props.item.link} onClick={props.close}>
                {props.item.text}
            </NavLink>
        </div>
    )
}
{/* <div className="link">
            <Link
                onSetActive={()=>setActive(true)}
                onSetInactive={()=>setActive(false)}
                to={props.item.link}
                spy={true}
                smooth={true}
                offset={props.item.offset}
                duration={1000}
                className="link__text"
                onClick={
                    props.close
                    }>
                <span className={active?"link__text_line_active":"link__text_line"}></span>{props.item.text}</Link>
        </div> */}