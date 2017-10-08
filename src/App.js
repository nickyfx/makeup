import React, {Component} from 'react';
import {Button, Col, Grid, Image, Nav, Navbar, NavItem, Row} from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';

import dark from "./img/dark.jpg"
import lips from "./img/emoji_lips.png";

import IMG_0813 from "./img/IMG_0813.jpg"
import IMG_0851 from "./img/IMG_0851.jpg"
import IMG_0943 from "./img/IMG_0943.jpg"
import IMG_1183 from "./img/IMG_1183.jpg"
import IMG_1189 from "./img/IMG_1189.jpg"
import IMG_1192 from "./img/IMG_1192.jpg"
import IMG_1193 from "./img/IMG_1193.jpg"
import IMG_1524 from "./img/IMG_1524.jpg"
import IMG_1587 from "./img/IMG_1587.jpg"
import IMG_1664 from "./img/IMG_1664.jpg"
import IMG_1715 from "./img/IMG_1715.jpg"
import IMG_1750 from "./img/IMG_1750.jpg"
import IMG_1753 from "./img/IMG_1753.jpg"
import IMG_1754 from "./img/IMG_1754.jpg"
import IMG_1755 from "./img/IMG_1755.jpg"
import IMG_1756 from "./img/IMG_1756.jpg"
import IMG_1757 from "./img/IMG_1757.jpg"
import IMG_1764 from "./img/IMG_1764.jpg"
import IMG_1765 from "./img/IMG_1765.jpg"
import IMG_1766 from "./img/IMG_1766.jpg"
import IMG_1770 from "./img/IMG_1770.jpg"
import IMG_1771 from "./img/IMG_1771.jpg"
import IMG_1772 from "./img/IMG_1772.jpg"
import IMG_1773 from "./img/IMG_1773.jpg"
import IMG_1774 from "./img/IMG_1774.jpg"
import IMG_6545 from "./img/IMG_6545.jpg"
import IMG_7942 from "./img/IMG_7942.jpg"
import IMG_8532 from "./img/IMG_8532.jpg"
import IMG_9008 from "./img/IMG_9008.jpg"
import IMG_9705 from "./img/IMG_9705.jpg"
import IMG_9756 from "./img/IMG_9756.jpg"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Image src={lips} responsive/> NickyFx Makeup
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={() => scrollToComponent(this.beauty)}>Beauty</NavItem>
                        <NavItem eventKey={2} href="#" onClick={() => scrollToComponent(this.body_art)}>Body Art</NavItem>
                        <NavItem eventKey={3} href="#" onClick={() => scrollToComponent(this.sculpt)}>Sculpt</NavItem>
                        <NavItem eventKey={3} href="#" onClick={() => scrollToComponent(this.effects)}>Effects</NavItem>
                    </Nav>
                </Navbar>

                <section className="splash-container">
                    <Grid className="splash">
                        <div className="hero">
                            <h1 className="heading">
                                Blood &amp; Beauty
                            </h1>
                            <p>
                                Bringing your vision to life
                            </p>

                            <Button bsStyle="primary" bsSize="large" className="btn-outline-primary"
                                    onClick={() => scrollToComponent(this.beauty)}>
                                Beauty
                            </Button>
                            <Button bsSize="large" className="btn-outline-primary"
                                    onClick={() => scrollToComponent(this.blood)}>
                                Blood
                            </Button>
                        </div>
                    </Grid>
                </section>

                <section ref={beauty => this.beauty = beauty}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Beauty</h3>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1757} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_6545} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_7942} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1764} responsive/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={3}>
                                <Image src={IMG_1765} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_9008} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_8532} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1766} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section ref={body_art => this.body_art = body_art}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Body Art</h3>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1193} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1754} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1753} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1587} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_9756} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_9705} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1755} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1756} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section ref={blood => this.blood = blood}>
                    <Image src={dark}/>
                </section>

                <section ref={sculpt => this.sculpt = sculpt}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Sculpt</h3>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1183} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1524} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1664} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1750} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1773} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1774} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1189} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section ref={effects => this.effects = effects}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Effects</h3>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1192} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1772} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1770} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1771} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_0851} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_0943} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_0813} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1715} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
