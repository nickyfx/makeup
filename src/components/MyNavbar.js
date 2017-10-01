import React, {Component} from "react";
import {Image, Nav, Navbar, NavItem} from "react-bootstrap";

import lips from "../img/emoji_lips.png";

class MyNavbar extends Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Image src={lips} responsive/> NickyFx Makeup
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Beauty</NavItem>
                    <NavItem eventKey={2} href="#">Body Art</NavItem>
                    <NavItem eventKey={3} href="#">Sculpt</NavItem>
                    <NavItem eventKey={3} href="#">Effects</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;
