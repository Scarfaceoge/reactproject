import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderPPEs = ({ product }) => {
   
    const ppes = product.map(ppe => {
        return (
            <div className='m-3'>
                <Link to={`/ppes/${ppe.productId}`}>
                    <Card className='productCard'>
                        <img src={ppe.src} alt={ppe.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{ppe.brandName} <br /> &#8358;{ppe.price}</h4>
                </div>
            </div >
        )
    })

    return (
        ppes
    )
}

class PPEs extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Personal Protective Equipments</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderPPEs product={this.props.products.ppes} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(PPEs));