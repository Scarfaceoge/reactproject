import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderPainKillers = ({ product }) => {
   
    const painKillers = product.map(painKiller => {
        return (
            <div className='m-3'>
                <Link to={`/painKillers/${painKiller.productId}`}>
                    <Card className='productCard'>
                        <img src={painKiller.src} alt={painKiller.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{painKiller.brandName} <br /> &#8358;{painKiller.price}</h4>
                </div>
            </div >
        )
    })

    return (
        painKillers
    )
}

class PainKillers extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Pain killers</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderPainKillers product={this.props.products.painKillers} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(PainKillers));