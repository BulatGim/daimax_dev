import { useState, useEffect } from 'react'
import Case from '../../molecules/Case/Case';
import { cases } from '../../constants'
import './SectionCases.css';
export default function SectionCases() {

    const [cards, setCards] = useState([...cases].find((card) => card.size <= document.documentElement.clientWidth && card.size <= 1920).case);
    const [active, setActive] = useState({})
    let items = [...cases].find((card) => card.size <= document.documentElement.clientWidth && card.size <= 1920).case
    function handleSort(e) {
        const { name } = e.target;
        if (active[name] == true) {
            setActive({
                [name]: false
            })
            setCards(items)
        } else {
            setActive({
                [name]: true
            })
            setCards(
                items.filter((card) => card.type == name)
            )
        }
    }
    return (
        <div className="section-cases">
            <div className="section-cases__filters">
                <button className={active.landing ? "section-cases__filter section-cases__filter_active" : "section-cases__filter"} name='landing' type="button" onClick={(e) => handleSort(e)}>Landing page</button>
                <button className={active.magazine ? "section-cases__filter section-cases__filter_active" : "section-cases__filter"} name='magazine' type="button" onClick={(e) => handleSort(e)}>Интернет-магазин</button>
            </div>
            <div className="section-cases__container">
                {cards.map((card) => (
                    <Case
                        card={card} />
                ))}
            </div>
        </div>
    )
}