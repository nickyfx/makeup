import React, {Component} from 'react';
import {Button, Col, Grid, Image, Nav, Navbar, NavItem, Row} from 'react-bootstrap';
import Icon from "react-fontawesome";
import scrollToComponent from 'react-scroll-to-component';

import dark from "./img/dark.jpg"
import lips from "./img/emoji_lips.png";

import IMG_0813 from "./img/IMG_0813.jpg"
import IMG_0851 from "./img/IMG_0851.jpg"
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
import IMG_1768 from "./img/IMG_1768.jpg"
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

const FACEBOOK = 'https://www.facebook.com/NickySoupSFX/';
const INSTAGRAM = 'https://www.instagram.com/nicky_soup/';
const EMAIL = 'n13campbell@gmail.com';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Button className="navbar-brand" bsStyle="link" onClick={() => scrollToComponent(this.top)}>
                                <Image src={lips} responsive/> NickyFx Makeup
                            </Button>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#" onClick={() => scrollToComponent(this.beauty)}>BEAUTY</NavItem>
                            <NavItem href="#" onClick={() => scrollToComponent(this.body_art)}>BODY ART</NavItem>
                            <NavItem href="#" onClick={() => scrollToComponent(this.sculpt)}>SCULPT</NavItem>
                            <NavItem href="#" onClick={() => scrollToComponent(this.effects)}>EFFECTS</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem href={"mailto:" + EMAIL}>{EMAIL}</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <section className="splash-container" ref={top => this.top = top}>
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
                                    onClick={() => scrollToComponent(this.blood, {
                                        align: 'bottom',
                                        offset: 185
                                    })}>
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
                                <p>
                                    Whether you’re looking for a subtle daytime glow, or stunning nighttime glamour, I
                                    can bring your desired look to life with traditional or airbrushed techniques. Want
                                    to take it a step further? Let’s create a period specific look from whatever decade
                                    inspires you.
                                </p>
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
                                <p>
                                    Curious about the world of body art? I offer base to full-body airbrushing and hand
                                    painting, transforming your body into a work of art. Tell me your concept, or show
                                    me your ideal picture, and I’ll create your unforgettable look.
                                </p>
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
                    <Image src={dark} responsive/>
                </section>

                <section ref={sculpt => this.sculpt = sculpt}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Sculpt</h3>
                                <p>
                                    I love fabricating and experimenting with different materials. An experienced life
                                    caster (creating a bust to sculpt from) and prosthetics applicator, I can build your
                                    vision in gelatin or foam latex. If you can dream it, I can craft it.
                                </p>
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
                                <Image src={IMG_1189} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1715} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section ref={effects => this.effects = effects}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Effects</h3>
                                <p>
                                    Take a trip to the wild side and delve into my box of horror. I offer everything
                                    from out of kit effects, to prosaid transfers, and hand crafted silicone, latex and
                                    gelatin pieces. Whether you’re looking for a subtle effect like bruising or cuts, or
                                    a deadly vision of exposed flesh, broken bones, and gore, I can make even your
                                    creepiest nightmares come true.
                                </p>
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
                                <Image src={IMG_1773} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1774} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1770} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_1771} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_0851} responsive/>
                            </Col>
                            <Col sm={3}>
                                <Image src={IMG_0813} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section className="contact">
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>About Me</h3>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={3}>
                                <Image src={IMG_1768} responsive/>
                            </Col>
                            <Col sm={9}>
                                <div className="d-flex align-items-end flex-column" style={{height: "250px"}}>
                                    <div>
                                        <p>
                                            I’m a graduate of the JCI Make-up Artistry program. Whether it’s beauty
                                            make-up, body art or bringing an entirely unique character to life, this is
                                            my passion. I love the creative freedom and brilliant transformations from
                                            ordinary to art this medium allows me. I can’t wait to share my inspiration
                                            with you.
                                        </p>

                                        <p>
                                            I am a proud IMATS Battle of the Brushes finalist, representing JCI and
                                            competing in the Character/Prosthetics Awards Show on October 14, 2017 in
                                            Vancouver. <a
                                            href="http://www.jcinstitute.com/imats-battle-brushes-finalist-spotlights-nicky-campbell/">Read
                                            a full interview about my journey and relationship to the
                                            world of makeup.</a>
                                        </p>

                                        <p>
                                            Connect with me on your inspirations via <a
                                            href={"mailto:" + EMAIL}>email</a>, <a href={FACEBOOK}>Facebook</a>, or <a
                                            href={INSTAGRAM}>Instagram</a>.
                                        </p>
                                        <p>
                                            Together, we can bring your vision to life.
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <ul className="list-inline">
                                            <li><a href={"mailto:" + EMAIL}>{EMAIL}</a></li>
                                            <li><a href={FACEBOOK}><Icon name='facebook-square' size='2x'/></a></li>
                                            <li><a href={INSTAGRAM}><Icon name='instagram' size='2x'/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
