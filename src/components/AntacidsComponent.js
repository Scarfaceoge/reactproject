import React, {Component} from 'react';
import {Card , Button} from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';
import {addCart , removeCart} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const mapDispatchToProps  = {
   addCart,
   removeCart
}

class RenderAntacids extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const antacids = this.props.products.antacids.map(antacid => {
            return (
                <div className='m-3 antacid'>
                    <Link to={`/antacids/${antacid.productId}`}>
                        <Card className='productCard'>
                            <img src={antacid.src} alt={antacid.brandName} width='300' height='300' className='productImage' />
                        </Card>
                    </Link>
                    <div className='d-flex justify-content-center text-center'>
                        <h4>{antacid.brandName} <br /> &#8358;{antacid.price}</h4>
                    </div>
                </div >
            )
        })

        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Antacids</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    {antacids}
                </div>
            </div>
        )
    }
}



export default withRouter(connect(mapStateToProps , mapDispatchToProps)(RenderAntacids));