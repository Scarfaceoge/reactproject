import React, {Component} from 'react';
import {Card , Button} from 'reactstrap';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {removeCart} from '../redux/ActionCreators'

const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeCart
}

class Cart extends Component {

    render() {
        console.log(this.props.cart)

        const cartItem = this.props.cart.map(item => {

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

        

        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Cart</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    {cartItem}
                </div>
            </div>
        )
    }    
}


export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Cart))