import React, {Component} from 'react';
import {Card , Button , ButtonDropdown , DropdownToggle , DropdownItem , DropdownMenu , Label , Input , FormGroup} from 'reactstrap';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addCart , removeCart} from '../redux/ActionCreators';
import {ProductsButtons} from './ProductsComponent';
import {Prescription} from './HomeComponent';

const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addCart,
    removeCart
}

class Cart extends Component {
    
    render() {

        const cartItem = () => {
            
            if(this.props.cart === 0) {
                return(
                    <div>
                        <h4>Your cart is empty</h4>
                    </div>
                )
            } else { 
                return (
                    this.props.cart.map(item => {
                        return (
                            <div className='m-3 row' style={{border:'1px ridge', borderRadius: '20px'}}>
                                <div className='col-md-2'>
                                    <img src={item.src} alt={item.brandName} width='150' height='150' className='productImage' />
                                </div>
                                <div className='col-md-3 pt-3'>
                                    <div >
                                        <h5>{item.brandName} <br /> &#8358;{item.price}</h5>
                                    </div>
                                    <p>{item.qty}</p>
                                   
                                </div>
                            </div >
                        )
                    })
                )
            }
        }

        




        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Cart</h2>
                </div>
                <hr className='offset-1'></hr>
                
                {cartItem()}
               
                <hr/>
                <ProductsButtons />
                <Prescription />
            </div>
        )
    }
}

/* class Cart extends Component {

    render() {
        console.log(this.props.cart);

        const cartItem = () => {

            if(this.props.cart.length === 0) {
                return(
                    <div>
                        <h4>Your cart is empty</h4>
                    </div>
                )
            } else { 
                return (
                    this.props.cart.map(item => {
                        return (
                            <div className='m-3'>
                                <Card className='productCard'>
                                    <img src={item.src} alt={item.brandName} width='300' height='300' className='productImage' />
                                </Card>
                                <div className='d-flex justify-content-center text-center'>
                                    <h4>{item.brandName} <br /> &#8358;{item.price}</h4>
                                </div>
                                <div className='d-flex justify-content-center text-center'>
                                    <Button color='danger' onClick={() => this.props.removeCart(item)} className='productBtn'><strong>Remove from cart</strong></Button>
                                </div>
                            </div >
                        )
                    })
                )
            }
        }

        




        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Cart</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    {cartItem()}
                </div>
                <hr/>
                <ProductsButtons />
                <Prescription />
            </div>
        )
    }
} */


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))