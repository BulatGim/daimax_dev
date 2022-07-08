import "./sectionOurTeam.css";
import Button from "../../atoms/Button/Button"
import PersonCard from "../../molecules/personCard/personCard";
import firstPerson from "../../commonImgs/1.svg";
import secondPerson from "../../commonImgs/2.svg";
import thirdPerson from "../../commonImgs/3.svg";
export default function SectionOurTeam() {
    const people = [{
        name: "wcmowc",
        post: "vammoev",
        photo: firstPerson,
        tgLink: "https:\\google.com"
    }, {
        name: "wcmowc",
        post: "vammoev",
        photo: secondPerson,
        tgLink: "https:\\google.com",
    }, {
        name: "wcmowc",
        post: "vammoev",
        photo: thirdPerson,
        tgLink: "https:\\google.com",
    }, {
        name: "wcmowc",
        post: "vammoev",
        photo: secondPerson,
        tgLink: "https:\\google.com",
    }
    ]
    return (
        <section className="OurTeam" >
            <h3 className="OurTeam__title">О КОМАНДЕ</h3>
            <div className="aboutTeamContainer" id="ourTeam">
                <div className="aboutTeam">
                    <div className="aboutTeam__titles">
                        <h2 className="company">DAIMAX<span className="company__dot">.</span>TEAM –</h2>
                        <div className="teamForYou">
                            <h2 className="teamForYou__title">КОМАНДА, КОТОРАЯ</h2>
                            <h2 className="teamForYou__title">ПОСТАВИТ ВАШ</h2>
                            <h2 className="teamForYou__title">БИЗНЕС НА МАКСИМУМ</h2>
                        </div>
                    </div>
                    <p className="aboutTeam__description"><span>Когда нужны эффективные IT-решения, а не новые проблемы с поиском веб-разработчика, умеющего создавать самописные сайты, работать с базами данных, верстать страницы через код, настраивать или дорабатывать функционал.</span><span>Когда важно в 1 окне получить и стильный фирменный стиль, и яркий нейминг, и адаптивный сайт, и безупречно работающие CRM и ERP системы.</span></p>
                </div>
                <p>DAIMAX.team станет ответственным и выгодным партнером-исполнителем, который знает о web-разработке, графическом дизайне, frontend и backend-разработке всё. А значит – мы комплексно запустим современные решения для вашего бизнеса, и выведем его на новый уровень успеха и прибыли.</p>
            </div>
            {/* <div className="OurTeam__content">
                <h3 className="OurTeam__subtitle">ХОЧЕШЬ К НАМ В КОМАНДУ?</h3>
                <Button text={"Вакансии"} style="end"/>
            </div>
            <div className="cardsContainer">
                {people.map((item, key) =>
                    <PersonCard key={key} name={item.name} post={item.post} photo={item.photo} tgLink={item.tgLink}
                                VKlink={item.VKlink} bhLink={item.bhLink} dribble={item.dribble}/>
                )}
            </div> */}
        </section>
    )
}