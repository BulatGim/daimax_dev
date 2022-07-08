import React, { useState, useEffect } from "react";
import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import Main from "./pages/Main/Main";
import { not_found } from "./constants";
import './App.css';
import NotFound from "./organisms/404/NotFound";
import Modal from "./molecules/Modal/Modal";
import Services from "./pages/Services/Services";
import ServicePage from "./pages/ServicePage/ServicePage";
import Contacts from "./pages/Contacts/Contacts";
import AllCases from "./pages/AllCases/AllCases";
function App() {
    const [modal, setModal] = useState(false);
    function modalOpen() {
        setModal(true)
    }
    function modalClose() {
        setModal(false)
    }
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
    const navigate = useNavigate();
    function handleShowServices(name){
        navigate(`/services/${name}`)
    }
    useEffect(()=>window.scrollTo(0, 0))
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Main open={modalOpen} openNavBar={navBarOpen} closeNavBar={navBarClose} visible={visible} />} />
                    <Route path="/services" element={<Services handleShowServices={handleShowServices} open={modalOpen} openNavBar={navBarOpen} closeNavBar={navBarClose} visible={visible} />} />
                    <Route path="/services/:name" element={<ServicePage open={modalOpen} openNavBar={navBarOpen} closeNavBar={navBarClose} visible={visible}/>} />
                    <Route path="/contacts" element={<Contacts handleShowServices={handleShowServices} open={modalOpen} openNavBar={navBarOpen} closeNavBar={navBarClose} visible={visible} />} />
                    <Route path="/all-cases" element={<AllCases handleShowServices={handleShowServices} open={modalOpen} openNavBar={navBarOpen} closeNavBar={navBarClose} visible={visible} />} />
                   <Route path="*" element={<NotFound not_found={not_found} />} />
                </Routes>
            <Modal
                modal={modal}
                close={modalClose} />
        </div>
    );
}

export default App;
