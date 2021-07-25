import React, {Component} from 'react';
import { Jumbotron , Navbar , Nav , NavbarToggler , Collapse , NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { LOGOS } from '../shared/logos';

class Header extends Component {
   constructor(props){
       super(props);
       this.state = {
           logos : LOGOS,
           isNavOpen: false
       }
   }

   toggleNav(){
       this.setState({
           isNavOpen:!this.state.isNavOpen
       })
   }

    render(){

        return(
            <React.Fragment>
            
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className='col-sm-2'>
                                <img src={this.state.logos.src} alt={this.state.logos.title}/>
                            </div>
                            <div className="col-sm-8">
                                <h1>Dividend Pharmacy</h1>
                            </div>
                            <div className='col-sm-2'>
                                <strong>Contact:</strong><br/>
                                <a href='tel:5555555555'>555-555-5555</a><br/>
                                <a href='mailto:dividendpharma@gmail.com'>dividendpharma@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar light sticky='top' expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/media'>Media Center</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/partners'>Our Partners</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;