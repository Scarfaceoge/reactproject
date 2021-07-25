import React, {Component} from 'react';
import Header from './HeaderComponent';
import { Switch , Route , Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent.js';
import Media from './MediaComponent';
import Partners from './PartnersComponent';
import Footer from './FooterComponent';

class Main extends Component {

    render() {
        return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/media' component={Media}/>
                <Route path='/partners' component={Partners} />
                <Route path='/about' component={About}/>
                <Redirect to='/home' />
            </Switch>
            <Footer/>
        </div>
        )
    }
}

export default Main;