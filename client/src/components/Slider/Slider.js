import React from 'react';
import {Carousel, Container} from "react-bootstrap";

import slide1 from "./slide1.jpg"
import slide2 from "./slide2.jpg"
import slide3 from "./slide3.jpg"

const Slider = () => {
    return (
        <Container style={{paddingTop: "10px"}}>
            <Carousel fade variant="dark">
                <Carousel.Item interval={2000} style={{height: "300px"}}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        height={"100%"}
                    />
                    <Carousel.Caption>
                        <h3 style={{textShadow: "1px 1px 9px  white"}}>Trade and services LLC</h3>
                        <p style={{textShadow: "1px 1px 8px  white", fontWeight: "600"}}>Responsibility is the key to
                            success</p>
                        <br/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{height: '300px'}}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        height={"100%"}
                    />

                    <Carousel.Caption>
                        <h3 style={{textShadow: "1px 1px 9px white"}}>Trade and services LLC</h3>
                        <p style={{textShadow: "1px 1px 8px white", fontWeight: "600"}}>Responsibility is the key to
                            success</p>
                        <br/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{height: '300px'}}>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        height={"100%"}
                    />

                    <Carousel.Caption>
                        <h3 style={{textShadow: "1px 1px 9px white"}}>Trade and services LLC</h3>
                        <p style={{textShadow: "1px 1px 8px white", fontWeight: "600"}}>Responsibility is the key to
                            success</p>
                        <br/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    );
};

export default Slider;