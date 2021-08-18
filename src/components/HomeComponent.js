import React, { Component } from 'react';
import { Card , CardImg , CardTitle , Button , Modal , ModalHeader , ModalBody , Label , Row , Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm , Errors} from 'react-redux-form';



export function RenderHomeItem({homeImage}){
    return (
            <Card>
                <Link to={`/home/${homeImage.id}`} className='text-link'>
                    <CardImg src={homeImage.src} width='100%' alt={homeImage.title} />
                    <CardTitle><h4>{homeImage.title}</h4></CardTitle>
                </Link>
            </Card>
    )
}

const required = val => val && val.length;
const isNumber = val => !isNaN(+val);

class Prescription extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            phoneNum:'',
            title:'',
            upload:'',
            isModalOpen: false
        }
        this.toggleModal= this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render(){
        return(
            <div className='row d-flex justify-content-end text-right uploadPrescription p-5 mb-3'>
            <div>
                <h4>Send us your prescription</h4>
                <p>So we can help you fill the order before you arrive.<br /> Your prescription will be treated with the utmost confidentiality</p>
                <Button color='danger' onClick={this.toggleModal}>
                    Upload your Prescription
                </Button>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h3>Upload your prescription</h3>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm>
                            <Row className='form-group'>
                                <Label htmlFor='firstName' md={3}>First name:</Label>
                                <Col>
                                    <Control.text 
                                        model='.firstName'
                                        name='firstName'
                                        id='firstName'
                                        className='form-control'
                                        validators={{
                                            required:required
                                        }}
                                    />
                                    <Errors
                                        model='.firstName'
                                        component='div'
                                        className='text-danger'
                                        show='touched'
                                        messages={{
                                            required: 'This field is required'}}
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='lastName' md={3}>Last name:</Label>
                                <Col>
                                    <Control.text 
                                        model='.lastName'
                                        name='lastName'
                                        id='lastName'
                                        className='form-control'
                                        validators={{
                                            required:required
                                        }}
                                    />
                                    <Errors
                                        model='.lastName'
                                        component='div'
                                        className='text-danger'
                                        show='touched'
                                        messages={{
                                            required: 'This field is required'}}
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='phoneNum' md={3}>Phone:</Label>
                                <Col>
                                    <Control.text 
                                        model='.phoneNum'
                                        name='phoneNum'
                                        id='phoneNum'
                                        className='form-control'
                                        validators={{
                                            required:required,
                                            isNumber: isNumber
                                        }}
                                    />
                                    <Errors
                                        model='.phoneNum'
                                        component='div'
                                        className='text-danger'
                                        show='touched'
                                        messages={{
                                            required: 'This field is required',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='lastName' md={3}>Title:</Label>
                                <Col>
                                    <Control.select
                                        model='.title'
                                        name='title'
                                        id='title'
                                        className='form-control'
                                        >
                                            <option>Select</option>
                                            <option>Mr.</option>
                                            <option>Mrs.</option>
                                            <option>Miss</option>
                                            <option>Dr.</option>
                                            <option>Prof.</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='upload' md={3}>Upload:</Label>
                                <Col>
                                    <Control
                                        type='file'
                                        model='.upload'
                                        name='upload'
                                        id='upload'  
                                    />
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        </div>
        );
    }
}


function Home(props) {

    const home = props.homeImages.map(homeImage => {
        return (
            <div key={props.homeImages.id} className='col-md-5 my-3'>
                <RenderHomeItem homeImage={homeImage} />
            </div>
        )
    })

    return (
        <div className='container'>
            <div className='row offset-1'>
                {home}
            </div>
            <Prescription />
        </div>
    )
}

export default Home;