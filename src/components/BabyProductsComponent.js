import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderBabyProducts = ({ product }) => {
   
    const babyProducts = product.map(babyProduct => {
        return (
            <div className='m-3'>
                <Link to={`/babyProducts/${babyProduct.productId}`}>
                    <Card className='productCard'>
                        <img src={babyProduct.src} alt={babyProduct.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{babyProduct.brandName} <br /> &#8358;{babyProduct.price}</h4>
                </div>
            </div >
        )
    })

    return (
        babyProducts
    )
}

class BabyProducts extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Baby Products</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderBabyProducts product={this.props.products.babyProducts} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(BabyProducts));