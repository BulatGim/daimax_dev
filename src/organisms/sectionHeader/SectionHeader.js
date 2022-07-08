import './SectionHeader.css'
export default function SectionHeader(props){
    function createMarkup() {
        return {__html: props.MainTitle};
    }
    function createSubtitle() {
        return {__html: props.MainSubtitle};
    }
    function createSubtitleTwo() {
        return {__html: props.MainSubtitleTwo};
    }
    return (
        <section className="header" id="header">
            <div className="header__logo"></div>
            <div className="header__info">
                <h1 className="header__title" dangerouslySetInnerHTML={createMarkup()}></h1>
                <hr className="header__line"/>
                <p className="header__subtitle" dangerouslySetInnerHTML={createSubtitle()}></p>
                <p className="header__subtitle" dangerouslySetInnerHTML={createSubtitleTwo()}></p>
            </div>
        </section>
    )
}
