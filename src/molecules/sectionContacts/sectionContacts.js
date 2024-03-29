import "./sectionContacts.css";

export default function SectionContacts() {
    return(
        <section className="Contacts" id="contacts">
            <hr className="Contacts__line"></hr>
            <div className="footer">
                <div className="leftBlock">
                    <div className="logo"></div>
                    <p className="RR">Daimax.team © 2022</p>
                </div>
                <div className="feedback">
                    <div className="socialNetwrks">
                        <a className="socialNetwrks__mail" href="mailto:daimaxteam@yandex.ru">daimaxteam@yandex.ru</a>
                        <div className="linksToSN">
                            <div className="socialNetwrks__item socialNetwrks__item_telegram"></div>
                            <div className="socialNetwrks__item socialNetwrks__item_whats"></div>
                            <div className="socialNetwrks__item socialNetwrks__item_behance"></div>
                        </div>
                    </div>
                    <div className="feedback__main">
                        <a className="feedback__phone" href="tel:+74954318131">+7 (495)431-81-31</a>
                        <p className="feedback__address">Дмитровское ш., 100, стр. 2,</p>
                        <p className="feedback__address">Москва, Россия</p>
                    </div>
                </div>
            </div>
        </section>
    )
}