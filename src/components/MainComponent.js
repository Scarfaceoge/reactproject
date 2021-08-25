import React, {Component} from 'react';
import Header from './HeaderComponent';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent.js';
import Media from './MediaComponent';
import Products from './ProductsComponent';
import Antacids from './AntacidsComponent';
import AntiMalarials from './AntiMalarialsComponent';
import BabyProducts from './BabyProductsComponent';
import ColdFlus from './ColdFlusComponent';
import Creams from './CreamsComponent';
import EssentialOils from './EssentialOilsComponent';
import MedicalDevices from './MedicalDevicesComponent';
import PainKillers from './PainKillersComponent';
import PPEs from './PPEsComponent';
import Provisions from './ProvisionsComponent';
import Supplements from './SupplementsComponent';
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

        const ProductItemInfo = (props) => {
            return(
                <ProductItem 
                    antacid={this.props.products.antacids.filter(antacid => antacid.productId === +props.match.params.productItem)[0]}
                    antiMalarial={this.props.products.antiMalarials.filter(antiMalarial => antiMalarial.productId === +props.match.params.productItem)[0]}
                    babyProduct={this.props.products.babyProducts.filter(babyProduct => babyProduct.productId === +props.match.params.productItem)[0]}
                    coldFlu={this.props.products.coldFlus.filter(coldFlu => coldFlu.productId === +props.match.params.productItem)[0]}
                    cream={this.props.products.creams.filter(cream => cream.productId === +props.match.params.productItem)[0]}
                    essentialOil={this.props.products.essentialOils.filter(essentialOil => essentialOil.productId === +props.match.params.productItem)[0]}
                    medicalDevice={this.props.products.medicalDevices.filter(medicalDevice => medicalDevice.productId === +props.match.params.productItem)[0]}
                    painKiller={this.props.products.painKillers.filter(painKiller => painKiller.productId === +props.match.params.productItem)[0]}
                    ppe={this.props.products.ppes.filter(ppe => ppe.productId === +props.match.params.productItem)[0]}
                    provision={this.props.products.provisions.filter(provision => provision.productId === +props.match.params.productItem)[0]}
                    supplement={this.props.products.supplements.filter(supplement => supplement.productId === +props.match.params.productItem)[0]}
                />
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
                <Route path='/antacids/:productItem' component={ProductItemInfo}/>
                <Route exact path='/antiMalarials' component={AntiMalarials} />
                <Route path='/antiMalarials/:productItem' component={ProductItemInfo} />
                <Route exact path='/babyProducts' component={BabyProducts} />
                <Route path='/babyProducts/:productItem' component={ProductItemInfo} />
                <Route exact path='/coldFlus' component={ColdFlus} />
                <Route path='/coldFlus/:productItem' component={ProductItemInfo} />
                <Route exact path='/creams' component={Creams} />
                <Route path='/creams/:productItem' component={ProductItemInfo} />
                <Route exact path='/essentialOils' component={EssentialOils} />
                <Route path='/essentialOils/:productItem' component={ProductItemInfo} />
                <Route exact path='/medicalDevices' component={MedicalDevices} />
                <Route path='/medicalDevices/:productItem' component={ProductItemInfo} />
                <Route exact path='/painKillers' component={PainKillers} />
                <Route path='/painKillers/:productItem' component={ProductItemInfo} />
                <Route exact path='/ppes' component={PPEs} />
                <Route path='/ppes/:productItem' component={ProductItemInfo} />
                <Route exact path='/provisions' component={Provisions} />
                <Route path='/provisions/:productItem' component={ProductItemInfo} />
                <Route exact path='/supplements' component={Supplements} />
                <Route path='/supplements/:productItem' component={ProductItemInfo} />
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