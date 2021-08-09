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
            <hr/>
            <div>
                <a className='btn btn-social-icon btn-facebook' href='https://www.facebook.com' target='_blank'><i className='fa fa-facebook'></i></a>{' '}
                <a className='btn btn-social-icon btn-instagram' href='https://www.instagram.com' target='_blank'><i className='fa fa-instagram'></i></a>{' '}
                <a className='btn btn-social-icon btn-twitter' href='https://www.twitter.com' target='_blank'><i className='fa fa-twitter'></i></a>{' '}
                <a className='btn btn-social-icon btn-google' href='https://www.youtube.com' target='_blank'><i className='fa fa-youtube'></i></a>
            </div>
            <p style={{paddingBottom: 20}}>Designed by ogemdi in partial fulfilment of the requirements of the bootstrap course <br />
            <i className='fa fa-copyright'></i>dividendpharma2021</p>
            
        </footer>
    )
}

export default Footer;