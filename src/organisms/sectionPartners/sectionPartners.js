import "./sectionPartners.css";
import partner from "./imgs/amoCRM.svg"

export default function SectionPartners() {
    const partners = [partner, partner, partner, partner, partner, partner, partner, partner, partner]
    return(
        <section className="partners">
            <h3 className="partners__title">ПАРТНЕРЫ</h3>
            <div className="partners__container">
                {partners.map((item, key)=>
                    <div key={key} className="partner" style={{background: `url(${item}) center no-repeat`}}></div>
                )}
            </div>
        </section>
    )
}