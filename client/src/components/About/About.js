import React, {useEffect} from 'react';
import {Card, Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";
import wallsAndFloorsArr from "../Gallery/WallsAndFloors/WallsAndFloors"


const About = () => {

    useEffect(()=>{window.scrollTo(0,0)},[])

    return (
        <div>
            <h2>Trade and service LLC</h2>
            <Container style={{backgroundColor: "lightgray"}}>
                <Row>
                    <Col md={6}
                         style={{padding: "1rem 1rem"}}>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={wallsAndFloorsArr[3]}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={wallsAndFloorsArr[2]}
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
                            <h4>Professional equipment</h4>
                            <p>Quality work performance</p>
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

                <Carousel variant="dark" style={{padding: "15px"}}>
                    <CarouselItem interval={3000} style={{height: "300px"}}>
                        <Row className="justify-content-md-center">
                            <Col>
                                <Card >
                                    <Card.Img src={wallsAndFloorsArr[5]} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.3"}}/>
                                    <Card.ImgOverlay style={{color: "black", padding: "5px 10px" }}>
                                        <h3>Micheal Y.</h3>
                                        {/*<Card.Text>*/}
                                            <h4>Very responsible people, they did a complete
                                                renovation in my bedroom with high quality and quickly.</h4>
                                        {/*</Card.Text>*/}
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col className="d-none d-sm-block">
                                <Card>
                                    <Card.Img src={wallsAndFloorsArr[10]} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.3"}}/>
                                    <Card.ImgOverlay style={{color: "black", padding: "5px 10px" }}>
                                        <h3>Emma G.</h3>
                                        {/*<Card.Text>*/}
                                            <h4> Many thanks for the quality painting of
                                                the house in the shortest possible time.</h4>
                                        {/*</Card.Text>*/}
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </CarouselItem>


                    <CarouselItem interval={3000} style={{height: "300px"}}>
                        <Row className="justify-content-md-center">
                            <Col>
                                <Card>
                                    <Card.Img src={wallsAndFloorsArr[1]} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.3"}}/>
                                    <Card.ImgOverlay style={{color: "black", padding: "5px 10px" }}>
                                        <h3>Joshua S.</h3>
                                        {/*<Card.Text >*/}
                                           <h4>Fast and professional workers, everyone does their
                                               job well. The timing and cost were very good.</h4>
                                        {/*</Card.Text>*/}
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col className="d-none d-sm-block">
                                <Card>
                                    <Card.Img src={wallsAndFloorsArr[9]} alt="Card image"
                                              className="d-block h-100"
                                              style={{opacity: "0.3"}}/>
                                    <Card.ImgOverlay style={{color: "black", padding: "5px 10px" }}>
                                        <h3>Kris M.</h3>
                                        {/*<Card.Text>*/}
                                            <h4>Thank you for your work! I am very satisfied with the quality
                                                of the tiling and the renovation of
                                                the roof of my house. All terms of the contract were fulfilled
                                                within the stipulated time.</h4>
                                        {/*</Card.Text>*/}
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