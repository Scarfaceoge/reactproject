import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderProvisions = ({ product }) => {
   
    const provisions = product.map(provision => {
        return (
            <div className='m-3'>
                <Link to={`/provisions/${provision.productId}`}>
                    <Card className='productCard'>
                        <img src={provision.src} alt={provision.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{provision.brandName} <br /> &#8358;{provision.price}</h4>
                </div>
            </div >
        )
    })

    return (
        provisions
    )
}

class Provisions extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Provisions</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderProvisions product={this.props.products.provisions} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Provisions));