import { useParams } from "react-router-dom";
import Rocket from "../../atoms/Rocket/Rocket";
import { services } from '../../constants'
import Menu from "../../molecules/Menu/Menu";
import NavBar from '../../molecules/NavBar/NavBar'
import SectionContacts from "../../molecules/sectionContacts/sectionContacts";
import SectionHeader from "../../organisms/sectionHeader/SectionHeader";
import SectionOurCases from "../../organisms/SectionOurCases/SectionOurCases";
import SectionOurTeam from "../../organisms/sectionOurTeam/sectionOurTeam";
import SectionServicesSolutions from "../../organisms/SectionServicesSolutions/SectionServicesSolutions";
import SectionWhyUs from "../../organisms/sectionWhyUs/sectionWhyUs";
import './ServicePage.css';
import {Helmet} from "react-helmet";
export default function ServicePage(props) {
    const { name } = useParams()
    let page = services.find((page) => page.name == name)
    return (
        <div className="service-page">
             <Helmet>
                <meta charSet="utf-8" />
                <title>{page.helmet.title}</title>
                <meta name="description" content={page.helmet.description} />
                <meta name="keywords" content={page.helmet.keywords} />
            </Helmet>
            <NavBar
                open={props.openNavBar}
            />
            <Menu
                visible={props.visible}
                close={props.closeNavBar}
                open={props.open} />
            <div>
                <SectionHeader MainTitle={page.MainTitle} MainSubtitle={page.MainSubtitle} />
                <SectionServicesSolutions height='495px' title={page.title} subtitle={page.subtitle} constants={page.constants} price={page.price}/>
                <div id="main">
                <SectionOurCases />
                    <div id="partners">
                        <SectionWhyUs />
                    </div>
                    <SectionOurTeam />
                    <SectionContacts />
                    <Rocket />
                </div>
            </div>
        </div >
    )
}