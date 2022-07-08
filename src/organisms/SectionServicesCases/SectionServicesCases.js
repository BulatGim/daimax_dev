import './SectionServicesCases.css';
import { section_services_cases_card } from '../../constants';
import SectionServicesCasesCard from '../../molecules/SectionServicesCasesCard/SectionServicesCasesCard'
export default function SectionServicesCases () {
    return (
        <section className='section-services-cases'>
            <h2 className='section-services-cases__title'>Наши кейсы</h2>
            <div className='section-services-cases__container'>
                {section_services_cases_card.map((card)=>(
                    <SectionServicesCasesCard
                    key={card.id}
                    card={card}/>
                ))}
                <a href='/all-cases' className="section-services-cases__button"><p className="section-services-cases__button_text">ВСЕ КЕЙСЫ<span className="section-services-cases__button_text_arrow"></span></p></a>
            </div>
            <div className='section-services-cases__logo'></div>
        </section>
    )
}