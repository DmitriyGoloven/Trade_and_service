import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import WallsAndFloorsArr from "./WallsAndFloors/WallsAndFloors.js"



const Gallery = () => {

    useEffect(()=>{window.scrollTo(0,0)},[])


        const images = WallsAndFloorsArr

        const [photoIndex, setPhotoIndex] = useState(0)
        const [isOpen, setIsOpen] = useState(false)

        return (
            <>
                <Container>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % images.length)
                            }
                        />
                    )}

                    <h2>Walls and floors</h2>
                    <Container fluid className={"gallery-container"}>
                        <Row>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(0)
                                    setIsOpen(true)
                                }}>
                                    <Card.Img className={"galleryImage"} src={images[0]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={4} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(1)
                                    setIsOpen(true)
                                }}
                                >
                                    <Card.Img className={"galleryImage"} src={images[1]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(2)
                                    setIsOpen(true)

                                }}>
                                    <Card.Img className={"galleryImage"} src={images[2]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={2} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(3)
                                    setIsOpen(true)

                                }}>
                                    <Card.Img className={"galleryImage"} src={images[3]} alt="Card image"/>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(4)
                                    setIsOpen(true)

                                }}>
                                    <Card.Img className={"galleryImage"} src={images[4]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(5)
                                    setIsOpen(true)

                                }}>
                                    <Card.Img className={"galleryImage"} src={images[5]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={4} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(6)
                                    setIsOpen(true)

                                }}>
                                    <Card.Img className={"galleryImage"} src={images[6]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                    setPhotoIndex(7)
                                    setIsOpen(true)

                                }}>
                                    <Card.Img className={"galleryImage"} src={images[7]} alt="Card image"/>
                                </Card>
                            </Col>
                        </Row>

                    </Container>

                    <h2>Bathrooms</h2>

                    <Container fluid className={"gallery-container"}>
                        <Row>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(0)
                                        setIsOpen(true)
                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[0]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={4} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(1)
                                        setIsOpen(true)
                                    }}
                                >
                                    <Card.Img className={"galleryImage"} src={images[1]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(2)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[2]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={2} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(3)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[3]} alt="Card image"/>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(4)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[4]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(5)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[5]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={4} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(6)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[6]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(7)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[7]} alt="Card image"/>
                                </Card>
                            </Col>
                        </Row>

                    </Container>


                    <h2>Outdoor work</h2>
                    <Container fluid className={"gallery-container"}>
                        <Row>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(0)
                                        setIsOpen(true)
                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[0]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={4} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(1)
                                        setIsOpen(true)
                                    }}
                                >
                                    <Card.Img className={"galleryImage"} src={images[1]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(2)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[2]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={2} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(3)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[3]} alt="Card image"/>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(4)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[4]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(5)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[5]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={4} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(6)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[6]} alt="Card image"/>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className={"galleryCol"}>
                                <Card
                                    className="galleryCard"
                                    onClick={() => {
                                        setPhotoIndex(7)
                                        setIsOpen(true)

                                    }}>
                                    <Card.Img className={"galleryImage"} src={images[7]} alt="Card image"/>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <h3>All photos are taken at our facilities</h3>
                </Container>

            </>
        );
    }
;

export default Gallery;