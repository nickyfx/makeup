import React, {Component} from 'react';
import {Button, Col, Grid, Row} from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
    render() {
        return (
            <div>
                <section className="splash-container">
                    <Grid className="splash">
                        <div className="hero">
                            <h1 className="heading">
                                Blood &amp; Beauty
                            </h1>
                            <p>
                                Bringing your vision to life
                            </p>

                            <Button bsSize="large" className="btn-outline-primary" onClick={() => scrollToComponent(this.beauty)}>
                                Beauty
                            </Button>
                            <Button bsSize="large" className="btn-outline-primary" onClick={() => scrollToComponent(this.blood)}>
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

                        <Row>
                            <Col sm={8}>
                                <p>
                                    Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore
                                    eufugiatnulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    quiofficiadeseruntmollit anim id est laborum.Sed ut perspiciatis unde omnis iste
                                    natus error sit voluptatem accusantiumdoloremquelaudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt
                                    explicabo.
                                </p>
                            </Col>
                            <Col sm={4}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section ref={blood => this.blood = blood}>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h3>Blood</h3>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={8}>
                                <p>
                                    Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore
                                    eufugiatnulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    quiofficiadeseruntmollit anim id est laborum.Sed ut perspiciatis unde omnis iste
                                    natus error sit voluptatem accusantiumdoloremquelaudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt
                                    explicabo.
                                </p>
                            </Col>
                            <Col sm={4}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
