import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggler = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (<div>
            <Navbar dark color="dark" expand="sm">
                <div className="container">
                    <NavbarToggler onClick={this.navToggler} />
                    <NavbarBrand href="/"> Bohubrihi Restaurant</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>

                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link active"> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/menu" className="nav-link "> Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link "> Contact</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link a"> About</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </div>
            </Navbar>
        </div>)
    }
}
export default Navigation;