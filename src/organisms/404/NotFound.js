import './NotFound.css';
export default function NotFound(props) {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__title">{props.not_found.title}</h1>
                <p className="not-found__text">{props.not_found.text}</p>
                <div className="not-found__social">
                    <p className="not-found__social_text">{props.not_found.email}</p>
                    <p className="not-found__social_text">{props.not_found.telephone}</p>
                 <div className="not-found__links">
                    <a /* href={props.not_found.telegram} */ className="not-found__link not-found__link_telegram"></a>
                    <a /* href={props.not_found.whats} */ className="not-found__link not-found__link_whats"></a>
                    <a /* href={props.not_found.behance} */ className="not-found__link not-found__link_behance"></a>
                </div>   
                </div>
                <div className="not-found__logo"></div>
            </div>
        </div>
    )
}