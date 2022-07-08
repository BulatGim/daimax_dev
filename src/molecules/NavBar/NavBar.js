import './NavBar.css';
export default function NavBar (props) {
    return (
        <div className="navbar">
            <div className="navbar__content">
            <div className="navbar__logo"></div>
            <button className="navbar__btn" onClick={props.open}></button>
            </div>
        </div>
    )
}