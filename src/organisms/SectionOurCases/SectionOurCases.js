import OurCasesCard from '../../molecules/OurCasesCard/OurCasesCard';
import { section_our_cases, section_our_cases_text } from '../../constants'
import './SectionOurCases.css';
export default function SectionOurCases() {
    return (
        <section className="section-our-cases" id="cases">
            <h3 className="section-our-cases__title">НАШИ КЕЙСЫ</h3>
            {section_our_cases_text.map((text) => (
                <p className="section-our-cases__subtitle">{text}</p>
            ))}
            <div className="section-our-cases__container">
                {section_our_cases.map((card) => (
                    <OurCasesCard
                        key={card.id}
                        card={card}
                    />
                ))}
                <a href='/all-cases'className="section-our-cases__button"><p className="section-our-cases__button_text">ВСЕ КЕЙСЫ<span className="section-our-cases__button_text_arrow"></span></p></a>
            </div>
            <div className='section-our-cases__logo'/>
        </section>
    )
}