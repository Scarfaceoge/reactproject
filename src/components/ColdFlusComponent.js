import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderColdFlus = ({ product }) => {
   
    const coldFlus = product.map(coldFlu => {
        return (
            <div className='m-3'>
                <Link to={`/babyProducts/${coldFlu.productId}`}>
                    <Card className='productCard'>
                        <img src={coldFlu.src} alt={coldFlu.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{coldFlu.brandName} <br /> &#8358;{coldFlu.price}</h4>
                </div>
            </div >
        )
    })

    return (
        coldFlus
    )
}

class ColdFlus extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Cold &amp; Flu</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderColdFlus product={this.props.products.coldFlus} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(ColdFlus));