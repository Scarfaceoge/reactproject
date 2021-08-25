import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderEssentialOils = ({ product }) => {
   
    const essentialOils = product.map(essentialOil => {
        return (
            <div className='m-3'>
                <Link to={`/essentialOils/${essentialOil.productId}`}>
                    <Card className='productCard'>
                        <img src={essentialOil.src} alt={essentialOil.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{essentialOil.brandName} <br /> &#8358;{essentialOil.price}</h4>
                </div>
            </div >
        )
    })

    return (
        essentialOils
    )
}

class EssentialOils extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Essential Oils</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderEssentialOils product={this.props.products.essentialOils} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(EssentialOils));