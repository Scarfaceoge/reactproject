import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Card , CardImg , Button} from 'reactstrap';
import {addCart , removeCart} from '../redux/ActionCreators';
import {useDispatch} from 'react-redux';
import * as ActionTypes from '../redux/ActionTypes';


/*const mapStateToProps = state => {
    return{
        cart: state.cart,
        antacids: state.products.antacids
    }
}*/

const mapDispatchToProps = {
    addCart
}



const ProductInfo = ({antacid}) => {
    console.log(antacid)
    const dispatch = useDispatch();
    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={antacid.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{antacid.category}</Button>
                    <br />
                    <h3><strong>{antacid.brandName}</strong></h3>
                    <br />
                    <h4>{antacid.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{antacid.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => dispatch(addCart(antacid))}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}



export function ProductItem(props) {
    console.log(props)
    return(
        <div className='container'>
            <ProductInfo antacid={props.antacid}/>
        </div>
    )
}


export default withRouter(connect(null , mapDispatchToProps)(ProductItem))