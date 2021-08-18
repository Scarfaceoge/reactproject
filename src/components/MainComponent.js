import React, {Component} from 'react';
import Header from './HeaderComponent';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent.js';
import Media from './MediaComponent';
import Partners from './PartnersComponent';
import HomeItem from './HomeItemComponent'
import Footer from './FooterComponent';
import Register from './RegisterComponent.js';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return{
        images: state.images,
        homeImages: state.homeImages
    }
}
class Main extends Component {

    render() {

        const HomeItemInfo = (props) => {
            return(
                <HomeItem homeImage={this.props.homeImages.filter(homeImage => homeImage.id === +props.match.params.homeItem)[0]}/>
            )
        }

        return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/home'><Home homeImages={this.props.homeImages}/></Route>
                <Route path='/home/:homeItem' component={HomeItemInfo} />
                <Route path='/media' component={Media}/>
                <Route path='/partners' component={Partners} />
                <Route path='/about' component={About}/>
                <Route path='/signup' component={Register}/>
                <Redirect to='/home' />
            </Switch>
            <Footer/>
        </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));