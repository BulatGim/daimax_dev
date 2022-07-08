import ServicesSolutionsMenu from '../../molecules/ServicesSolutionsMenu/ServicesSolutionsMenu';
import ServicesSolutionsInfo from '../../molecules/ServicesSolutionsInfo/ServicesSolutionsInfo'
import Button from '../../atoms/Button/Button'
import './SectionServicesSolutions.css';
export default function SectionServicesSolutions (props){
    return (
        <section className="section-services-solutions" id={props.id}>
            <div className="section-services-solutions__content">
            <ServicesSolutionsMenu title={props.title} subtitle={props.subtitle} height={props.height} price={props.price}/>
            <div className="section-services-solutions__container">
            {props.constants.map((item)=>(
                <ServicesSolutionsInfo
                key={item.id}
                item={item}
                />
            ))}
            </div>
            </div>
            {/* <Button text={props.text}/> */}
            <img className='section-services-solutions__logo' src={props.background}/>
        </section>
    )
}