import {section_services} from '../../constants'
import SectionServicesCard from '../../molecules/SectionServicesCard/SectionServicesCard'
import Button from "../../atoms/Button/Button"
import './SectionServices.css'
export default function SectionServices(props){
    
    return (
        <section className="section-services">
            <h3 className="section-services__title">ПОПУЛЯРНЫЕ ВЕБ-УСЛУГИ</h3> 
            <div className="section-services__container">
            {section_services.map((card)=>(
                <SectionServicesCard
                key={card.id}
                card={card}
                handleShowServices={props.handleShowServices}
                />
            ))}
            </div> 
            {/* <Button text="А еще..."/>   */}
        </section>
    )
}