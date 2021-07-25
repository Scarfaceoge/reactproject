import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer className='text-center site-footer'>
            <ul>
                <li><Link to='/home' className='text-link'>Home</Link></li>
                <li><Link to='/about' className='text-link'>About</Link></li>
                <li><Link to='/media' className='text-link'>Media Center</Link></li>
                <li><Link to='/partners' className='text-link'>Our Partners</Link></li>    
            </ul>
            <div>
                
            </div>
        </footer>
    )
}

export default Footer;