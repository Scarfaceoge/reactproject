import React, {Component} from 'react';
import {Card} from 'reactstrap';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addCart , removeCart, adjustQty} from '../redux/ActionCreators';
import {ProductsButtons} from './ProductsComponent';
import {Prescription} from './HomeComponent';

const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addCart,
    removeCart,
    adjustQty
}

class Cart extends Component {
    
    render() {

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
                        const price = item.price*item.qty;
                        return (

                            <div className='row' style={{ border: '1px ridge', borderRadius: '5px' }}>
                                <div className='col-md-3'>
                                    <img src={item.src} alt={item.brandName} width='100' height='100' className='productImage' />
                                </div>
                                <div className='col-md-7 py-2'>
                                    <div >
                                        <h5>{item.brandName} <br /> &#8358;{price}</h5>
                                    </div>
                                    <div className='input-group'>
                                        <span><button className='btn btn-primary btn-sm' onClick={() => this.props.adjustQty(item.productId)}>-</button></span>
                                        <input type='number' value={item.qty} style={{ width: 40 }} />
                                        <span><button className='btn btn-primary btn-sm' onClick={() => this.props.addCart(item)}>+</button></span>
                                    </div>
                                </div>
                                <div className='col-md-2 d-flex align-items-end'>
                                    <button onClick={() => this.props.removeCart(item.productId)} className='btn btn-clear btn-sm'><i>remove</i></button>
                                </div>
                            </div>
                        )
                    })
                )
            }
        }

        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2 className='col'>Cart</h2>
                    
                </div>
                <hr className='offset-1'></hr>
                <div className='row'>
                    <div className='col'>
                        {cartItem()}
                    </div>
                    <div className='col'>
                    
                    </div>
                </div>
                
               
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