import './OurCasesCard.css';
export default function OurCasesCard(props) {
    function determineSize(size) {
        let newsize;
        if (document.documentElement.clientWidth>1440) {
            return size;
        }else if (document.documentElement.clientWidth>= 1024 && document.documentElement.clientWidth<=1440) {
            newsize = size*0.8
            return newsize;
        }else{
            newsize = size*0.7
            return newsize;
        }
    }
    function appear() {
        if(props.card.id===1){ 
            if (document.documentElement.clientWidth>= 320 && document.documentElement.clientWidth<=767) { 
                return determineSize(20) 
            } 
            return determineSize(16) 
        }
        else if (props.card.id === 4) {
            return determineSize(30)
        }
        else {
            return determineSize(20)
        }
    }
    return (
        <a target="_blank" href={props.card.link} style={{background: props.card.background}} className="our-cases-card">
            <div className="our-cases-card__info">
                <h6 style={{"font-size": appear(), "color":(props.card.id===5)?("#000"):("")}} className="our-cases-card__text">{props.card.title}</h6>
                <h6 style={{"font-size": appear(), "color":(props.card.id===5)?("#000"):("")}} className="our-cases-card__text">{props.card.subtitle}</h6>
            </div>
        </a>
    )
}