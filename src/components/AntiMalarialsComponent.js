import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderAntiMalarials = ({ product }) => {
   
    const antiMalarials = product.map(antiMalarial => {
        return (
            <div className='m-3'>
                <Link to={`/antiMalarials/${antiMalarial.productId}`}>
                    <Card className='productCard'>
                        <img src={antiMalarial.src} alt={antiMalarial.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{antiMalarial.brandName} <br /> &#8358;{antiMalarial.price}</h4>
                </div>
            </div >
        )
    })

    return (
        antiMalarials
    )
}

class AntiMalarials extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Anti-malarials</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderAntiMalarials product={this.props.products.antiMalarials} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(AntiMalarials));