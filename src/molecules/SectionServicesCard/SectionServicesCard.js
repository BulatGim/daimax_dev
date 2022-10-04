import './SectionServicesCard.css'
export default function SectionServicesCard (props){
    function showService(event){
        props.handleShowServices(event.name)
    }
    return (
        <div className="section-services-card" style={{background: `url(${props.card.src}) no-repeat`,backgroundSize:'cover' }} onClick={()=>showService(props.card)}>
            <h4 className="section-services-card__title">{props.card.title}</h4>
            <div className="section-services-card__arrow"></div>
        </div>
    )
}