import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import logo from "../NavigBar/logo.png";
import background from "./background.jpg"
import {useHttp} from "../Admin/hooks/http.hook";
import {toast} from "react-toastify";


const Footer = () => {
    let navigate = useNavigate();

    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: "", phone: "", service: "default", name: ""
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const sandRequest = async () => {
        try {

            const data = await request("/api/orders/service", "POST", {...form})

            if (data.message) {
                toast.success(data.message)
            }
            if (data) {
                document.getElementById("form").reset()
            }
        } catch (e) {
        }
    }
    useEffect(() => {
        if (error) {
            toast.error(`${error}`);
            clearError()
        }
    }, [error, clearError])


    return (
        <div>
            <h2>Get best service</h2>
            <Container style={{paddingTop: "15px", backgroundColor: "lightgray"}}>
                <Form id={"form"}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control
                                name={"email"}
                                type="email"
                                placeholder="Enter email"
                                onChange={changeHandler}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="phone">
                            <Form.Label>Phone number*</Form.Label>
                            <Form.Control
                                name={"phone"}
                                type="tel"
                                placeholder="Phone"
                                onChange={changeHandler}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control style={{textTransform: "capitalize"}}
                                          name={"name"}
                                          type="text"
                                          placeholder="Name"
                                          onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="service">
                            <Form.Label>Type of service</Form.Label>
                            <Form.Select name={"service"} onChange={changeHandler} aria-label="Default select example">
                                <option value="Other type of service">Other type of service</option>
                                <option value="Painting walls">Painting walls</option>
                                <option value="Repairing floors">Repairing floors</option>
                                <option value="Replacing doors">Replacing doors</option>
                                <option value="Outdoor work">Outdoor work</option>
                                <option value="indoor work">indoor work</option>
                                <option value="Another type">Another type</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-grid gap-2" style={{padding: "25px 20%"}}>
                            <Button
                                onClick={sandRequest}
                                variant="dark"
                                type="submit"
                                disabled={loading || !form.email || !form.phone || !form.name}
                            >
                                Submit a request
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Container>
        <br/>
            <Container fluid className={"footer"} style={{backgroundImage: `url(${background})`}}>
                <Container className="justify-content-md-center" style={{padding: "15px"}}>
                    <Row>
                        <Col md={2} xs={7} onClick={() => {
                            navigate("/", {replace: true})
                        }}>
                            <img
                                src={logo}
                                width="110px"
                                height="100px"
                                alt="Trade and services"
                            />
                        </Col>
                        <Col md={3} xs={5}>
                            <h5 style={{color: "lightgray"}}> Links</h5>

                            <Link className={"footer-text"} to={"/gallery"}>Gallery</Link>
                            <br/>
                            <Link className={"footer-text"} to={"/about"}>About</Link>
                        </Col>
                        <Col md={4} xs={7}>
                            <h5 style={{color: "lightgray"}}> Contact us</h5>
                            <div>
                                <a className={"footer-text"} href={"tel: 3222021391"}>(321)2021391</a>
                            </div>
                            <div>
                                <a className={"footer-text"} href={"mailto: anjeuzp@gmail.com"}>anjeuzp@ gmail.com</a>
                            </div>
                        </Col>
                        <Col md={3} xs={5}>
                            <h5 style={{color: "lightgray"}}> Work time</h5>
                            <p className={"footer-text"}>7 days a week<br/>8:00 - 17:00</p>
                        </Col>
                    </Row>
                </Container>


            </Container>

        </div>
    );
};

export default Footer;