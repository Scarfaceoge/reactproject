import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderCreams = ({ product }) => {
   
    const creams = product.map(cream => {
        return (
            <div className='m-3'>
                <Link to={`/creams/${cream.productId}`}>
                    <Card className='productCard'>
                        <img src={cream.src} alt={cream.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{cream.brandName} <br /> &#8358;{cream.price}</h4>
                </div>
            </div >
        )
    })

    return (
        creams
    )
}

class Creams extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Creams</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderCreams product={this.props.products.creams} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Creams));