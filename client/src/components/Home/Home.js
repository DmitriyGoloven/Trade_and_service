import React, {useEffect, useState} from 'react';
import Slider from "../Slider/Slider";
import {Card, Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

import man from "./man.png"
import {Link} from "react-router-dom";
import WallsAndFloorsArr from "../Gallery/WallsAndFloors/WallsAndFloors"
import Lightbox from "react-image-lightbox";


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Slider/>
            <h2>Type of repairs</h2>
            <h3> All works is done by professionals and within the agreed time frame</h3>

            <Container style={{padding: "15px", backgroundColor: "lightgray"}}>
                <Row>
                    <Col xl={5} md={5} xs={12}>
                        <Image src={man}
                               alt={"man"}
                               width={"100%"}
                               height={"auto"}
                        />
                    </Col>
                    <Col xl={7} md={7} xs={12} style={{textAlign: "center"}}>

                        <Row className={"type-row"}>
                            <Col sm={6} xs={12}>
                                <h4>Wall painting</h4>
                                <p>Preparation, alignment, painting.</p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <h4>Laying tiles</h4>
                                <p>Dismantling, design, laying</p>
                            </Col>
                        </Row>
                        <Row className={"type-row"}>
                            <Col sm={6} xs={12}>
                                <h4>Outdoor repairs</h4>
                                <p>Required wall decoration</p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <h4>Door replacement</h4>
                                <p>Dismantling and installation</p>
                            </Col>
                        </Row>
                        <Row className={"type-row"}>
                            <Col sm={6} xs={12}>
                                <h4>Floor repair</h4>
                                <p>Leveling, laying laminate and tiles</p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <h4>Water pipes</h4>
                                <p>Repair, restoration and pipe laying</p>
                            </Col>
                        </Row>
                        <Row className={"type-row"}>
                            <Col sm={6} xs={12}>
                                <h4>Roof repair</h4>
                                <p>Restoration and replacement of coating</p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <h4>Plumbing work</h4>
                                <p>Plumbing repair and installation</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <h2>Examples of our work</h2>

            {isOpen && (
                <Lightbox
                    mainSrc={WallsAndFloorsArr[photoIndex]}
                    nextSrc={WallsAndFloorsArr[(photoIndex + 1) % WallsAndFloorsArr.length]}
                    prevSrc={WallsAndFloorsArr[(photoIndex + WallsAndFloorsArr.length - 1) % WallsAndFloorsArr.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + WallsAndFloorsArr.length - 1) % WallsAndFloorsArr.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % WallsAndFloorsArr.length)
                    }
                />
            )}


            <Container style={{padding: "15px", backgroundColor: "lightgray"}}>
                <Row >
                    <Col md={3} xs={6} className={"galleryCol"}>
                        <Card
                            className="galleryCard"
                            onClick={() => {
                            setPhotoIndex(0)
                            setIsOpen(true)}}>
                            <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[0]} alt="Card image"/>
                        </Card>
                    </Col>
                    <Col md={3} xs={6} className={"galleryCol"}>
                        <Card
                            className="galleryCard"
                            onClick={() => {
                            setPhotoIndex(1)
                            setIsOpen(true)}}>
                            <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[1]} alt="Card image"/>
                        </Card>
                    </Col>
                    <Col md={3} xs={6} className={"galleryCol"}>
                        <Card
                            className="galleryCard"
                            onClick={() => {
                            setPhotoIndex(2)
                            setIsOpen(true)}}>
                            <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[2]} alt="Card image"/>
                        </Card>
                    </Col>
                    <Col md={3} xs={6} className={"galleryCol"}>
                        <Card
                            className="galleryCard"
                            onClick={() => {
                            setPhotoIndex(3)
                            setIsOpen(true)}}>
                            <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[3]} alt="Card image"/>
                        </Card>
                    </Col>
                </Row>
                    <Row>
                        <Col md={3} xs={6} className={"galleryCol"}>
                            <Card
                                className="galleryCard"
                                onClick={() => {
                                setPhotoIndex(4)
                                setIsOpen(true)}}>
                                <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[4]} alt="Card image"/>
                            </Card>
                        </Col>
                        <Col md={3} xs={6} className={"galleryCol"}>
                            <Card
                                className="galleryCard"
                                onClick={() => {
                                setPhotoIndex(5)
                                setIsOpen(true)}}>
                                <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[5]} alt="Card image"/>
                            </Card>
                        </Col>
                        <Col md={3} xs={6} className={"galleryCol d-none d-md-block"}>
                            <Card
                                className="galleryCard"
                                onClick={() => {
                                setPhotoIndex(6)
                                setIsOpen(true)}}>
                                <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[6]} alt="Card image"/>
                            </Card>
                        </Col>
                        <Col md={3} xs={6} className={"galleryCol d-none d-md-block"}>
                            <Card
                                className="galleryCard"
                                onClick={() => {
                                setPhotoIndex(7)
                                setIsOpen(true)}}>
                                <Card.Img className={"galleryImage"} src={WallsAndFloorsArr[7]} alt="Card image"/>
                            </Card>
                        </Col>
                    </Row>
                <Row>
                    <Link className={"gallery-link"} to={"/gallery"}>See more >>></Link>
                </Row>
            </Container>

        </>
    )
};

export default Home;