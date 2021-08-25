import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderSupplements = ({ product }) => {
   
    const supplements = product.map(supplement => {
        return (
            <div className='m-3'>
                <Link to={`/supplements/${supplement.productId}`}>
                    <Card className='productCard'>
                        <img src={supplement.src} alt={supplement.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{supplement.brandName} <br /> &#8358;{supplement.price}</h4>
                </div>
            </div >
        )
    })

    return (
        supplements
    )
}

class Supplements extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Supplements</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderSupplements product={this.props.products.supplements} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Supplements));