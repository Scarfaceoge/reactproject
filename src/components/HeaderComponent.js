import React, {Component} from 'react';
import { Jumbotron , Navbar , Nav , NavbarBrand , NavbarToggler , Collapse , NavItem , Button } from 'reactstrap';
import {NavLink , Link} from 'react-router-dom';
import { IMAGES } from '../shared/images';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: IMAGES,
            isNavOpen: false,
            isModalOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
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
                                <img src={this.state.images[0].src} alt={this.state.images[0].title}/>
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
                        <NavbarBrand className='mr-auto' href='/'><img src={this.state.images[1].src} alt={this.state.images[1].description} height='25' width='25' /></NavbarBrand>
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
                                    <NavLink className='nav-link' to='/products'>Products</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <ul className='mr-auto' id='members'>
                            <li className='member'><Link to='/cart'><Button color='danger' className='btn-sm'><i className='fa fa-shopping-cart fa-sm'>{' '}Cart {' '}{this.props.cart.length === 0 ? null : this.props.cart.map(prod => prod.qty).reduce((a , c) => a + c)}</i></Button></Link></li>
                            <li className='member'><Link className='text-link' to='/signup'>Sign up</Link></li>
                            <li className='member'><Link className='text-link'>Login</Link></li>
                        </ul>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(Header);