import './Services.css';
import NavBar from '../../molecules/NavBar/NavBar';
import Menu from '../../molecules/Menu/Menu';
import SectionHeader from '../../organisms/sectionHeader/SectionHeader';
import SectionServices from '../../organisms/SectionServices/SectionServices'
import SectionServicesCases from '../../organisms/SectionServicesCases/SectionServicesCases';
import SectionWhyUs from '../../organisms/sectionWhyUs/sectionWhyUs';
import SectionOurTeam from '../../organisms/sectionOurTeam/sectionOurTeam';
import SectionContacts from '../../molecules/sectionContacts/sectionContacts';
import Rocket from '../../atoms/Rocket/Rocket';
import { services_page } from '../../constants';
export default function Services(props) {
    return (
        <div className="Services">
            <NavBar
                open={props.openNavBar}
            />
            <Menu
                visible={props.visible}
                close={props.closeNavBar}
                open={props.open} />
            <div>
                <SectionHeader MainTitle={services_page.MainTitle} MainSubtitle={services_page.MainSubtitle} />
                <div id="main">
                    <SectionServices
                    handleShowServices={props.handleShowServices}/>
                    <SectionServicesCases/>
                    <div id="partners">
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