import "./NavBar.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [open, setOpen] = useState(false);


    return (
        <>
            <div className={`bg-blur ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
            <Navbar expand="lg" style={{backgroundColor:"black"}} className={`w-100 z-2 nav_bar ${location.pathname == '/' ? 'position-relative' : 'position-relative'}`}>
                <Container className="d-flex align-items-center">
                    <Navbar.Brand className="" role="button" onClick={() => navigate("/")}>
                        <img
                            alt="San Luis +"
                            src="/images/sl+logo.webp"
                            height="100%"
                            
                            className="text-light"
                        />{' '}
                    </Navbar.Brand>
                    <Button variant="none" onClick={() => setOpen(!open)} className="z-3 d-lg-none">
                        <svg width="40" height="40" viewBox="0 0 512 512" style={{ color: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 24 24" fill="#ffffff" x="0" y="0" role="img" style={{ display: "inline-block;vertical-align:middle" }} xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path fill="currentColor" fillRule="evenodd" d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z" clipRule="evenodd" /></g></svg></svg>
                    </Button>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-lg-grow-1 d-lg-flex flex-lg-row justify-content-lg-start">
                            <Nav.Link className="text-light nav-link" onClick={() => navigate("/")}>Inicio</Nav.Link>
                            <Nav.Link className="text-light nav-link" onClick={() => {setOpen(false),navigate("/servicios")}}>Noticias</Nav.Link>
                            <Nav.Link className="text-light nav-link" onClick={() => {setOpen(false),navigate("/chipeado")}}>Programación</Nav.Link>
                            <Nav.Link className="text-light nav-link" onClick={() => navigate("/productos")}>Institucional</Nav.Link>
                            <Nav.Link className="text-light nav-link" onClick={() => navigate("/nosotros")}>Contacto</Nav.Link>
                        </Nav>
                        <Nav className="">
                            <Navbar.Brand href="https://www.instagram.com/vet_del_parque/" target="window">
                                <img
                                    alt="San Luis +"
                                    src="/images/instagram.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block text-light"
                                />{' '}
                            </Navbar.Brand>
                            <Navbar.Brand href="https://wa.me/5492664392132" target="window">
                                <img
                                    alt="San Luis +"
                                    src="/images/whatsapp.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block text-light"
                                />{' '}
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {open && <div className={`d-flex flex-column h-100 position-fixed z-3 align-items-center ${open ? "menu-opened" : "menu-closed"}`}>
                <Nav className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
                    <Nav.Link className="text-light nav-link-mobile fs-2" href="/" onClick={() => {setOpen(false)}}>Inicio</Nav.Link>
                    <Nav.Link className="text-light nav-link-mobile fs-2" href="/servicios" onClick={() => {setOpen(false)}}>Noticias</Nav.Link>
                    <Nav.Link className="text-light nav-link-mobile fs-2" href="/chipeado" onClick={() => {setOpen(false)}}>Programación</Nav.Link>
                    <Nav.Link className="text-light nav-link-mobile fs-2" href="/productos" onClick={() => {setOpen(false)}}>Institucional</Nav.Link>
                    <Nav.Link className="text-light nav-link-mobile fs-2" href="/nosotros" onClick={() => {setOpen(false)}}>Contacto</Nav.Link>
                </Nav>
                <Nav className="d-flex flex-row gap-4 position-relative mb-5">
                    <Navbar.Brand href="https://www.instagram.com/vet_del_parque/" target="window">
                        <img
                            alt="San Luis +"
                            src="/images/instagram.svg"
                            width="40"
                            height="40"
                            className="d-inline-block text-light"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand href="https://wa.me/5492664392132" target="window">
                        <img
                            alt="San Luis +"
                            src="/images/whatsapp.svg"
                            width="40"
                            height="40"
                            className="d-inline-block text-light"
                        />{' '}
                    </Navbar.Brand>
                </Nav>
            </div>}
        </>
    )
}

export default NavBar