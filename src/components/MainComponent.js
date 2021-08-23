import React, {Component} from 'react';
import Header from './HeaderComponent';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent.js';
import Media from './MediaComponent';
import Products from './ProductsComponent';
import Antacids from './AntacidsComponent';
import AntiMalarials from './AntiMalarialsComponent';
import HomeItem from './HomeItemComponent';
import Footer from './FooterComponent';
import Register from './RegisterComponent';
import {ProductItem} from './ProductItemComponent';
import Cart from './CartComponent';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return{
        images: state.images,
        homeImages: state.homeImages,
        products: state.products
    }
}
class Main extends Component {

    render() {

        const HomeItemInfo = (props) => {
            return(
                <HomeItem homeImage={this.props.homeImages.filter(homeImage => homeImage.id === +props.match.params.homeItem)[0]}/>
            )
        }

        const ProductItemInfo = ({match}) => {
            return(
                <ProductItem antacid={this.props.products.antacids.filter(product => product.productId === +match.params.productItem)[0]}/>
            )
        }

        return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/home'><Home homeImages={this.props.homeImages}/></Route>
                <Route path='/home/:homeItem' component={HomeItemInfo} />
                <Route path='/media' component={Media}/>
                <Route path='/products' component={Products} />
                <Route exact path='/antacids' component={Antacids} />
                <Route path='/antiMalarials' component={AntiMalarials} />
                <Route path='/antacids/:productItem' component={ProductItemInfo}/>
                <Route path='/about' component={About}/>
                <Route exact path='/cart' component={Cart}/>
                <Route path='/signup' component={Register}/>
                <Redirect to='/home' />
            </Switch>
            <Footer/>
        </div>
        )
    }
}



export default withRouter(connect(mapStateToProps)(Main));