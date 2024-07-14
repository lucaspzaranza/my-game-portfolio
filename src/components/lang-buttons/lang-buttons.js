import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import './lang-buttons.css';
import Flags from 'country-flag-icons/react/3x2'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { languages } from '../../data/data.js'

export const LangButtonsMenu = () => 
{
    const { setNewLanguage } = useContext(LanguageContext);
    const pt = languages.pt;
    const en = languages.en;

    return (
        <Navbar className="flags-nav" bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <a href="/" onClick={(el) => el.preventDefault()}>
                            <Flags.BR title="Brazil" className="flag br-flag" onClick={() => setNewLanguage(pt)}/>    
                        </a>

                        <a href="/" onClick={(el) => el.preventDefault()}>
                            <Flags.US title="USA" className="flag usa-flag" onClick={() => setNewLanguage(en)}/>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
