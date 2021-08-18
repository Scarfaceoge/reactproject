import React, {Component} from 'react';
import { Card , CardBody , CardTitle , CardHeader , Button, Label , Col , Row} from 'reactstrap';
import { Control , LocalForm , Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component {

    constructor(props) {
        super(props);

        this.state={
            firstName: '',
            lastName: '',
            title: 'Select',
            sex: false,
            phoneNum: '',
            email: '',
            password: '',
            address: ''
        }
    }

    handleSubmit(values) {
        console.log('The current state is: ' + JSON.stringify(values));
        alert('The current state is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <div className='container'>
                <div className='row m-4 '>
                    <div className='col-md-6'>
                        <Card>
                            <CardHeader>
                                <CardTitle><h4 className='text-white'>Register with us:</h4></CardTitle>
                            </CardHeader>
                            <CardBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className='form-group'>
                                        
                                            <Label htmlFor='firstName' md={3}>First name:</Label>
                                    
                                        <Col>
                                            <Control.text
                                                model='.firstName'
                                                id='firstName'
                                                name='firstName'
                                                placeholder='First name'
                                                className='form-control'
                                                validators={{
                                                    required,
                                                    minLength: minLength(3),
                                                    maxLength: maxLength(20)
                                                }}
                                            />
                                            <Errors
                                                model='.firstName'
                                                className='text-danger'
                                                component='div'
                                                show='touched'
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 3 characters',
                                                    maxLength: 'Must be less than 20 characters'
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                        
                                            <Label htmlFor='lastName' md={3}>Last name:</Label>
                                        
                                        <Col>
                                            <Control.text
                                                model='.lastName'
                                                id='lastName'
                                                name='lastName'
                                                placeholder='Last name'
                                                className='form-control'
                                                validators={{
                                                    required,
                                                    minLength: minLength(3),
                                                    maxLength: maxLength(20)
                                                }}
                                            />
                                            <Errors
                                                model='.lastName'
                                                className='text-danger'
                                                component='div'
                                                show='touched'
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 3 characters',
                                                    maxLength: 'Must be less than 20 characters'
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                       
                                            <Label htmlFor='title' md={3}>Title:</Label>
                                     
                                        <Col>
                                            <Control.select
                                                model='.title'
                                                name='title'
                                                id='title'
                                                className='form-control'
                                                defaultValue={'Select'}
                                            >
                                                <option value='Select'>Select</option>
                                                <option value='Mr.'>Mr.</option>
                                                <option value='Mrs.'>Mrs.</option>
                                                <option value='Miss'>Miss</option>
                                                <option value='Dr.'>Dr.</option>
                                                <option value='Prof.'>Prof.</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                        <Label md={3}>Sex:</Label>
                                        <Col>
                                            <Label>
                                                <Control.radio
                                                    model='.sex'
                                                    value='female'
                                                    name='sex'
                                                />
                                                Female
                                            </Label>
                                            <br />
                                            <Label>
                                                <Control.radio
                                                    model='.sex'
                                                    value='male'
                                                    name='sex'
                                                />
                                                Male
                                            </Label>
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                       
                                            <Label htmlFor='phoneNum' md={3}>Phone:</Label>
                                        
                                        <Col>
                                            <Control.text
                                                model='.phoneNum'
                                                id='phoneNum'
                                                name='phoneNum'
                                                placeholder='Phone number'
                                                className='form-control'
                                                validators={{
                                                    required,
                                                    isNumber,
                                                    minLength: minLength(10),
                                                    maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                                model='.phoneNum'
                                                className='text-danger'
                                                component='div'
                                                show='touched'
                                                messages={{
                                                    required: 'Required',
                                                    isNumber: 'Must be a number',
                                                    minLength: 'Must be at least 3 characters',
                                                    maxLength: 'Must be less than 20 characters'
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                       
                                            <Label htmlFor='email' md={3}>Email:</Label>
                                       
                                        <Col>
                                            <Control.text
                                                model='.email'
                                                name='email'
                                                id='email'
                                                className='form-control'
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                model='.email'
                                                className='text-danger'
                                                component='div'
                                                show='touched'
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                        
                                            <Label htmlFor='password' md={3}>Password:</Label>
                                       
                                        <Col>
                                            <Control
                                                model='.password'
                                                type='password'
                                                id='password'
                                                name='password'
                                                placeholder='Choose a password'
                                                className='form-control'
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                model='.password'
                                                className='text-danger'
                                                component='div'
                                                show='touched'
                                                messages={{
                                                    required: 'Required'
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className='form-group'>
                                        
                                            <Label htmlFor='address' md={3}>Address:</Label>
                                    
                                        <Col>
                                            <Control.textarea
                                                model='.address'
                                                id='address'
                                                name='address'
                                                placeholder='Address'
                                                className='form-control'
                                                rows='4'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button type='submit' color='primary'>
                                                Submit
                                            </Button>
                                            <Button type='reset' color='light' className='mx-2'>
                                                Reset
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-md-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ullamcorper sem,
                        at dapibus lorem. Maecenas a mauris dui. Nam nec nibh quis nisl sagittis aliquam.
                        Nunc elit augue, vehicula in est quis, mollis euismod felis. Vestibulum mauris leo,
                        auctor ut vulputate cursus, imperdiet quis nunc. Donec id dui leo. Quisque lobortis euismod aliquam.
                        Ut congue enim sit amet efficitur ullamcorper. Curabitur pulvinar risus et augue tempus facilisis.
                        Quisque eget enim ullamcorper, tincidunt sem accumsan, dignissim massa. Proin ligula dui,
                        condimentum in tincidunt tristique, ultrices ut nulla. Maecenas auctor ex id porta consectetur.
                        Aliquam sit amet vestibulum urna.

                        Etiam dignissim est libero, ut pretium eros scelerisque varius. Cras sollicitudin dictum magna vitae sodales.
                        Aenean sodales, erat sed blandit tincidunt, lectus lorem accumsan erat, nec mollis justo velit et sem.
                        Sed sagittis pretium risus. Donec feugiat nibh ante, sed tempus nulla bibendum hendrerit.
                        Curabitur id lorem dictum, convallis purus vitae, ultrices mauris. Sed non leo cursus, condimentum dolor sed,
                        placerat nunc. Nullam cursus enim vitae est mattis, sit amet blandit tellus maximus. Duis eleifend venenatis
                        convallis. Sed vitae finibus tortor. Nulla vel iaculis nisl, sed efficitur nunc. Nullam lacinia accumsan ornare.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sollicitudin
                        dapibus lorem non fringilla. Etiam posuere accumsan ante, et pretium arcu interdum et.
                    </div>
                </div>
            </div>
        )
    }
}

export default Register