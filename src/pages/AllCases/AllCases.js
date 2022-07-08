import './AllCases.css';
import NavBar from '../../molecules/NavBar/NavBar'
import Menu from '../../molecules/Menu/Menu'
import SectionHeader from '../../organisms/sectionHeader/SectionHeader';
import SectionWhyUs from '../../organisms/sectionWhyUs/sectionWhyUs';
import SectionOurTeam from '../../organisms/sectionOurTeam/sectionOurTeam';
import SectionContacts from '../../molecules/sectionContacts/sectionContacts';
import Rocket from '../../atoms/Rocket/Rocket';
import {cases_page} from '../../constants'
import SectionCases from '../../organisms/SectionCases/SectionCases';
export default function AllCases(props) {
    return (
        <div className="cases-page">
            <NavBar
                open={props.openNavBar}
            />
            <Menu
                visible={props.visible}
                close={props.closeNavBar}
                open={props.open} />
                <div>
                <SectionHeader MainTitle={cases_page.MainTitle} />
                <div id="main">
                    <SectionCases/>
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