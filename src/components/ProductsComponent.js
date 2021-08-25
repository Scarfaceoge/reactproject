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
            <ProductsButtons />
            <Prescription />
        </div>
    )
}

export function ProductsButtons() {
    return(
        <>
            <div className='row d-flex justify-content-center m-3'>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/antacids'>Antacids</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/antiMalarials'>Anti-malarials</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/coldFlus'>Cold &#38; Flu</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/supplements'>Supplements</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/medicalDevices'>Medical Devices</Link></Button>
            </div>
            <div className='row d-flex justify-content-center m-3'>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/ppes'>PPEs</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='babyProducts'>Baby Products</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/creams'>Creams</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/essentialOils'>Essentials Oils</Link></Button>
                <Button className='mx-2 col-md-2' color='info'><Link className='text-link text-white' to='/painKillers'>Pain killers</Link></Button> 
            </div>
        </>
    )
}

export default Products