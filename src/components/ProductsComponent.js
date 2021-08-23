import React from 'react';
import {Button} from 'reactstrap';
import {Prescription} from './HomeComponent';
import {Link} from 'react-router-dom';

function Products() {
    return(
        <div className='container'>
            <div>
                <h2 className='offset-1'>Choose a category</h2>
                <hr/>
            </div>
            <div className='row d-flex justify-content-center m-3'>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/antacids'>Antacids</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/antiMalarials'>Anti-malarials</Link></Button>
                <Button className='mx-2 col-md-2' color='info'>Cold &#38; Flu</Button>
                <Button className='mx-2 col-md-2' color='info'>Supplements</Button>
                <Button className='mx-2 col-md-2' color='info'>Medical devices</Button>
            </div>
            <div className='row d-flex justify-content-center m-3'>
                <Button className='mx-2 col-md-2' color='info'>PPEs</Button>
                <Button className='mx-2 col-md-2' color='info'>Baby products</Button>
                <Button className='mx-2 col-md-2' color='info'>Creams</Button>
                <Button className='mx-2 col-md-2' color='info'>Essential oils</Button>
                <Button className='mx-2 col-md-2' color='info'>Pain Killers</Button> 
            </div>
            <Prescription />
        </div>
    )
}

export default Products