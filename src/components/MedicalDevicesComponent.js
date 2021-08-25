import React, {Component} from 'react';
import {Card } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter , Link} from 'react-router-dom';

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const RenderMedicalDevices = ({ product }) => {
   
    const medicalDevices = product.map(medicalDevice => {
        return (
            <div className='m-3'>
                <Link to={`/medicalDevices/${medicalDevice.productId}`}>
                    <Card className='productCard'>
                        <img src={medicalDevice.src} alt={medicalDevice.brandName} width='300' height='300' />
                    </Card>
                </Link>
                <div className='d-flex justify-content-center text-center'>
                    <h4>{medicalDevice.brandName} <br /> &#8358;{medicalDevice.price}</h4>
                </div>
            </div >
        )
    })

    return (
        medicalDevices
    )
}

class MedicalDevices extends Component {
    render() {
        console.log(this.props.products);
        return (
            <div className='container'>
                <div className='row offset-2 mt-3'>
                    <h2>Medical Devices</h2>
                </div>
                <hr className='offset-1'></hr>
                <div className='row offset-1'>
                    <RenderMedicalDevices product={this.props.products.medicalDevices} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(MedicalDevices));