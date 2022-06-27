import React, {useEffect} from 'react';
import {Card, Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";
import dvor1 from "./dvor1.jpg";
import dvor from "./dvor.jpg";
import card11 from "./card11.png";
import card12 from "./card12.png";


const About = () => {

    useEffect(()=>{window.scrollTo(0,0)},[])

    return (
        <div>
            <h2>Some info and good words about Andrew's company</h2>
            <Container style={{backgroundColor: "lightgray"}}>
                <Row>
                    <Col md={6}
                         style={{padding: "1rem 1rem"}}>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={dvor1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={dvor}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                    </Col>

                    <Col md={6} style={{padding: "1rem", textAlign: "center"}}>

                        <Col>
                            <h4>Responsible employees</h4>
                            <p>Good customer reviews</p>
                        </Col>

                        <Col>
                            <h4>Quality materials</h4>
                            <p>Safety and comfort around You</p>
                        </Col>

                        <Col>
                            <h4>Quality materials</h4>
                            <p>Safety and comfort around You</p>
                        </Col>

                        <Col>
                            <h4>Qualified personnel</h4>
                            <p>Completion of work on time</p>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <h2>What our customers say </h2>
            <h3>We have 99% positive feedback for the work done</h3>


            <Container style={{backgroundColor: "lightgray"}}>

                <Carousel fade variant="dark" style={{padding: "15px"}}>
                    <CarouselItem interval={3000} style={{height: "300px"}}>
                        <Row className="justify-content-md-center">
                            <Col>
                                <Card>
                                    <Card.Img src={card11} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.4"}}/>
                                    <Card.ImgOverlay style={{color: "black"}}>
                                        <h3>Lena Y.</h3>
                                        <Card.Text>
                                            Lorem amet, conseonsequuntur hupsuquiss consequuntarumconsequonsequuntur
                                            harum incidunt,
                                            perferendis rempsupsuquiss consequuntur harum consequuntur harum!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col className="d-none d-sm-block">
                                <Card>
                                    <Card.Img src={card12} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.4"}}/>
                                    <Card.ImgOverlay style={{color: "black"}}>
                                        <h3>Lena Y.</h3>
                                        <Card.Text>
                                            Lorem amet, conseonsequuntur hupsuquiss consequuntarumconsequonsequuntur
                                            harum incidunt,
                                            perferendis rempsupsuquiss consequuntur harum consequuntur harum!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </CarouselItem>


                    <CarouselItem interval={3000} style={{height: "300px"}}>
                        <Row className="justify-content-md-center">
                            <Col>
                                <Card>
                                    <Card.Img src={card11} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.4"}}/>
                                    <Card.ImgOverlay style={{color: "black"}}>
                                        <h3>Vova S.</h3>
                                        <Card.Text >
                                           Lorem amet, consequuntur harum ur hupsuquiss consequuntarumconsequonsequuntur
                                            harum incidunt,
                                                perferendis rempsupsuquiss consequuntur harum consequuntur harum!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col className="d-none d-sm-block">
                                <Card>
                                    <Card.Img src={card12} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.4"}}/>
                                    <Card.ImgOverlay style={{color: "black"}}>
                                        <h3>Kirs M.</h3>
                                        <Card.Text>
                                          dunt,Lorem amet, conseor hupsuquiss consequuntarumconsequonsequuntur
                                            harum incidunt,
                                               perferendis rempsupsuquiss consequuntur harum consequuntur harum!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </CarouselItem>
                </Carousel>

            </Container>

        </div>
    );
};

export default About;