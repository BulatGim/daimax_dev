import Rocket from "../../atoms/Rocket/Rocket";
import Menu from "../../molecules/Menu/Menu";
import NavBar from "../../molecules/NavBar/NavBar";
import SectionContacts from "../../molecules/sectionContacts/sectionContacts";
import SectionHeader from "../../organisms/sectionHeader/SectionHeader";
import SectionOurCases from "../../organisms/SectionOurCases/SectionOurCases";
import SectionOurTeam from "../../organisms/sectionOurTeam/sectionOurTeam";
import SectionWhyUs from "../../organisms/sectionWhyUs/sectionWhyUs";
import {contacts_page} from '../../constants'
import './Contacts.css';
import ContactsForm from "../../molecules/ContactsForm/ContactsForm";
export default function Contacts(props) {
    return (
        <div className="contacts-page">
            <NavBar
                open={props.openNavBar}
            />
            <Menu
                visible={props.visible}
                close={props.closeNavBar}
                open={props.open} />
            <div>
                <SectionHeader MainTitle={contacts_page.MainTitle}  />
                <div id="main">
                    <ContactsForm/>
                    <SectionOurCases />
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