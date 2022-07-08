import LinkMenu from "../../atoms/Link/Link";
import Button from "../../atoms/Button/Button"
import { link } from "../../constants"
import './Menu.css'
import { useState } from "react";
export default function Menu(props) {
    const [close,setClose] = useState('')
    function closeMenu(){
        props.close();
        setClose('close')
    }
    return (
<>
        <div className="menu">
            <div className="menu__logo"></div>
            <div className="menu__links">
                {link.map((item) => (
                    <LinkMenu
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <Button text="Обсудить проект" style="start" click={props.open}/>
            {/* <Button text="WEB SHOP" style="shop" /> */}
        </div>
        <div className={props.visible?"menu__container menu__container_open":`menu__container ${close}`}>
        <div className="menu_tablet">
            <div className="menu__logo"></div>
            <div className="menu__links">
                {link.map((item) => (
                    <LinkMenu
                        key={item.id}
                        item={item}
                        close={props.close}
                    />
                ))}
            </div>
            <Button text="Обсудить проект" style="burger" click={props.open} />
            {/* <Button text="WEB SHOP" style="shop" /> */}
            <button className="menu__close" onClick={()=>closeMenu()}></button>
        </div>
        </div>
        </>
    )
}