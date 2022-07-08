import { useEffect, useState } from 'react';
import SectionServices from '../organisms/SectionServices/SectionServices';
import SectionOurCases from '../organisms/SectionOurCases/SectionOurCases'
import SectionServicesSolutions from '../organisms/SectionServicesSolutions/SectionServicesSolutions'
import SectionPartners from '../organisms/sectionPartners/sectionPartners'
import { services_info, services_menu, solutions_menu, solutions_info } from '../constants'
import SectionWhyUs from '../organisms/sectionWhyUs/sectionWhyUs';
import SectionOurTeam from '../organisms/sectionOurTeam/sectionOurTeam';
import SectionContacts from '../molecules/sectionContacts/sectionContacts';
import Rocket from '../atoms/Rocket/Rocket';
import NavBar from '../molecules/NavBar/NavBar';
import Menu from '../molecules/Menu/Menu';
import SectionHeader from '../organisms/sectionHeader/SectionHeader';
import Modal from '../molecules/Modal/Modal';
import './Main.css';
import services from '../commonImgs/services.svg'
import solutions from '../commonImgs/solutions.svg'
export default function Main(props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }, [visible])
    function navBarOpen() {
        setVisible(true)
    }
    function navBarClose() {
        setVisible(false)
    }


    return (
        <div className="Main">
            <NavBar
                open={navBarOpen}
            />
            <Menu
                visible={visible}
                close={navBarClose}
                open={props.open} />
            <div>
                <SectionHeader />
                <SectionServices />
                <div id="main">
                    <SectionOurCases />
                    <SectionServicesSolutions title={services_menu.title} subtitle={services_menu.subtitle}
                        constants={services_info} text={'Все услуги'} id="services" background={services} />
                    <SectionServicesSolutions background={solutions} title={solutions_menu.title} subtitle={solutions_menu.subtitle}
                        constants={solutions_info} text={'Все решения'} id="solutions" />
                    <div id="partners">
                        {/* <SectionPartners /> */}
                        <SectionWhyUs />
                    </div>
                    <SectionOurTeam />
                    <SectionContacts />
                    <Rocket />
                </div>
            </div>
        </div>
    )
}
