import { React, useContext } from 'react';
import "nes.css/css/nes.min.css";
import "rpgui/rpgui.min.css"
import "rpgui/rpgui.min.js"
import { LanguageContext } from '../../contexts/LanguageContext.js';
import './lang-buttons.css';
import Flags from 'country-flag-icons/react/3x2'
import Button from '@material-ui/core/Button';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export const LangButtonsMenu = () => 
{
    const [ lang, setLang ] = useContext(LanguageContext);

    return (
        <Navbar className="flags-nav" bg="light" expand="lg">
            <Container>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                         <Button onClick={() => setLang('pt')}>
                     <Flags.BR title="Brazil" className="flag br-flag"/>    
                 </Button>

                 <Button onClick={() => setLang('en')}>
                     <Flags.US title="USA" className="flag usa-flag" />
                 </Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
