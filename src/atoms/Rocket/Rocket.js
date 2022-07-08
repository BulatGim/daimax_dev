import * as Scroll from 'react-scroll';
import { Link} from "react-scroll";
import './Rocket.css';
export default function Rocket() {
    let scroll = Scroll.animateScroll;
    const toTop = () => scroll.scrollToTop()
    return (
            <Link
                activeClass="rocket_active"
                onClick={toTop}
                spy={true}
                to='main'
                className="rocket"
            />
    )
}