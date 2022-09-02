import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
        
        constructor(props){
            super(props);
            this.state={
                isNavOpen : false
            }
            this.toggleNav = this.toggleNav.bind(this);
        }

        toggleNav(){
            this.setState({
                isNavOpen : !this.state.isNavOpen
            });
        }
    render() {

        return (
            <>    

                <Navbar dark expand="md">

                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand className='mx-2' href="/">
                            <img src="assets/images/logo.png" height="35" width="41" alt="Ristorante Con Fusion " />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className=''>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className='fa fa-home fa-lg mx-2'></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className='fa fa-info fa-lg mx-2'></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className='fa fa-list fa-lg mx-2'></span>
                                        Menu

                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className='fa fa-address-card fa-lg mx-2'></span>
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>


                <div className='container-fluid jumbotron'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Restorante Con Fusion</h1>
                            <p>We take inspiration from the world's best cuisines, and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}
export default Header;