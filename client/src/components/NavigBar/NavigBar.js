import React, {useState} from 'react';
import {Nav, Navbar, Button, Container, Col, Row, Modal} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import FormService from "./FormService";
import background from "../Footer/background.jpg";
import logo from "./logo.png"


const NavigBar = () => {

    let navigate = useNavigate();

    const [show, setShow] = useState(false)

    const HandleClose = () => setShow(false)
    const HandleShow = () => setShow(true)

    return (
        <>
            <Navbar collapseOnSelect expand={"lg"}
                    className={"footer"}
                    style={{backgroundImage: `url(${background})`}}>
                <Container>
                    <Row>
                        <Col>
                            <Navbar.Brand
                                onClick={() => {
                                    navigate("/", {replace: true})
                                }}
                            >
                                <img
                                    src={logo}
                                    width="130px"
                                    height="90px"
                                    alt="Trade and services"
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col style={{padding: "  5px 2px"}}>
                            <a className={"App-link"} href={"tel: 3212021391"}>(321) 202 1391</a>
                            <br/>
                            <a className={"App-link"} href={"mailto: anjeuzp@gmail.com"}>anjeuzp@gmail.com</a>
                        </Col>
                    </Row>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"
                                   style={{backgroundColor: "white", opacity: "0.4"}}/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{
                            paddingLeft: "10%",
                            display: "inline-block",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}>
                            <NavLink className={"App-link"} to={"/"}>Home</NavLink>
                            <NavLink className={"App-link"} to={"/gallery"}>Gallery</NavLink>
                            <NavLink className={"App-link"} to={"/about"}>About</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                    <div className="justify-content-end">

                        <Button variant={"secondary"}
                                className={"btnStyle"}
                                onClick={HandleShow}>Get Service</Button>
                    </div>
                </Container>
            </Navbar>

            <Modal show={show} onHide={HandleClose}>
                <Modal.Header closeButton>
                    <h3>
                        Get service
                    </h3>
                </Modal.Header>
                <Modal.Body style={{textAlign: "center"}}>
                    <FormService HandleClose={HandleClose}/>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default NavigBar;