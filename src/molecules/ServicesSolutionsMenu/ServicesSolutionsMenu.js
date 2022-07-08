import './ServicesSolutionsMenu.css';
export default function ServicesSolutionsMenu (props){
    return (
        <div style={{maxHeight:`${props.height}`}} className="services-solutions-menu" >
            <h3 className="services-solutions-menu__title">{props.title}</h3>
            {props.subtitle.map((text)=>(
                <p className="services-solutions-menu__subtitle">{text}</p>
            ))}
            {props.price?(<h3 className='services-solutions-menu__price'> от <span className="services-solutions-menu__price_red">{props.price}</span></h3>):""}
        </div>
    )
}