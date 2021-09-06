import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Card , CardImg , Button} from 'reactstrap';
import {addCart } from '../redux/ActionCreators';
import {useDispatch} from 'react-redux';
import {ProductsButtons} from './ProductsComponent';


/*const mapStateToProps = state => {
    return{
        cart: state.cart,
        antacids: state.products.antacids
    }
}*/

const mapDispatchToProps = {
    addCart
}


const AntacidsInfo = ({antacid}) => {

    console.log(antacid)

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${antacid.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={antacid.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{antacid.category}</Button>
                    <br />
                    <h3><strong>{antacid.brandName}</strong></h3>
                    <br />
                    <h4>{antacid.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{antacid.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(antacid)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

const AntiMalarialsInfo = ({antiMalarial}) => {

    console.log(antiMalarial);

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${antiMalarial.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={antiMalarial.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{antiMalarial.category}</Button>
                    <br />
                    <h3><strong>{antiMalarial.brandName}</strong></h3>
                    <br />
                    <h4>{antiMalarial.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{antiMalarial.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(antiMalarial)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

const BabyProductsInfo = ({babyProduct}) => {

    console.log(babyProduct)

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${babyProduct.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={babyProduct.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{babyProduct.category}</Button>
                    <br />
                    <h3><strong>{babyProduct.brandName}</strong></h3>
                    <br />
                    <h4>{babyProduct.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{babyProduct.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(babyProduct)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

const ColdFlusInfo = ({coldFlu}) => {

    console.log(coldFlu)

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${coldFlu.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={coldFlu.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{coldFlu.category}</Button>
                    <br />
                    <h3><strong>{coldFlu.brandName}</strong></h3>
                    <br />
                    <h4>{coldFlu.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{coldFlu.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(coldFlu)}><strong>Add to cart</strong></Button>
                </div>
            </div>   
        </>
    )
}

const CreamsInfo = ({cream}) => {

    console.log(cream)

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${cream.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={cream.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{cream.category}</Button>
                    <br />
                    <h3><strong>{cream.brandName}</strong></h3>
                    <br />
                    <h4>{cream.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{cream.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(cream)}><strong>Add to cart</strong></Button>
                </div>
            </div>    
        </>
    )
}

const EssentialOilsInfo = ({essentialOil}) => {

    console.log(essentialOil);

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${essentialOil.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={essentialOil.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{essentialOil.category}</Button>
                    <br />
                    <h3><strong>{essentialOil.brandName}</strong></h3>
                    <br />
                    <h4>{essentialOil.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{essentialOil.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(essentialOil)}><strong>Add to cart</strong></Button>
                </div>
            </div> 
        </>
    )
}

const MedicalDevicesInfo = ({medicalDevice}) => {

    console.log(medicalDevice)

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${medicalDevice.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={medicalDevice.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{medicalDevice.category}</Button>
                    <br />
                    <h3><strong>{medicalDevice.brandName}</strong></h3>
                    <br />
                    <h4>{medicalDevice.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{medicalDevice.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(medicalDevice)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

const PainKillersInfo = ({painKiller}) => {

    console.log(painKiller);

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${painKiller.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={painKiller.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{painKiller.category}</Button>
                    <br />
                    <h3><strong>{painKiller.brandName}</strong></h3>
                    <br />
                    <h4>{painKiller.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{painKiller.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(painKiller)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

const PPEsInfo = ({ppe}) => {

    console.log(ppe);

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${ppe.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={ppe.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{ppe.category}</Button>
                    <br />
                    <h3><strong>{ppe.brandName}</strong></h3>
                    <br />
                    <h4>{ppe.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{ppe.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(ppe)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

const ProvisionsInfo = ({provision}) => {

    console.log(provision);

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${provision.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={provision.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{provision.category}</Button>
                    <br />
                    <h3><strong>{provision.brandName}</strong></h3>
                    <br />
                    <h4>{provision.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{provision.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(provision)}><strong>Add to cart</strong></Button>
                </div>
            </div>    
        </>
    )
}

const SupplementsInfo = ({supplement}) => {

    console.log(supplement);

    const dispatch = useDispatch();

    const handleClick = product => {
        dispatch(addCart(product));
        alert(`${supplement.brandName} has been added to your cart`)
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-md-6'>
                    <Card>
                        <CardImg src={supplement.src} />
                    </Card>
                </div>
                <div className='col-md-5'>
                    <Button outline color='secondary' className='productBtn' size='sm'>{supplement.category}</Button>
                    <br />
                    <h3><strong>{supplement.brandName}</strong></h3>
                    <br />
                    <h4>{supplement.genericName}</h4>
                    <br />
                    <h3><strong> &#8358;{supplement.price}</strong></h3>
                    <br />
                    <Button color='warning' onClick={() => handleClick(supplement)}><strong>Add to cart</strong></Button>
                </div>
            </div>
        </>
    )
}

export function ProductItem(props) {
    console.log(props)
    const renderItem = () => {
        if (props.antacid){
            return <AntacidsInfo antacid={props.antacid} />
        }
        if (props.antiMalarial){
            return <AntiMalarialsInfo antiMalarial={props.antiMalarial} />
        }
        if (props.babyProduct){
            return <BabyProductsInfo babyProduct= {props.babyProduct} />
        }
        if (props.coldFlu) {
            return <ColdFlusInfo coldFlu={props.coldFlu} />
        }
        if (props.cream) {
            return <CreamsInfo cream={props.cream}/>
        }
        if (props.essentialOil){
            return <EssentialOilsInfo essentialOil={props.essentialOil} />
        }
        if (props.medicalDevice) {
            return <MedicalDevicesInfo medicalDevice={props.medicalDevice} />
        }
        if (props.painKiller){
            return <PainKillersInfo painKiller= {props.painKiller} />
        }
        if (props.ppe) {
            return <PPEsInfo ppe={props.ppe} />
        }
        if (props.provision) {
            return <ProvisionsInfo provision={props.provision} />
        }
        if (props.supplement) {
            return <SupplementsInfo supplement={props.supplement} />
        }
        else return <div></div>
    }
    return(
        <div className='container'>
            <div className='row offset-1'>
                {renderItem()}
            </div>
            <hr/>
            <ProductsButtons />
            
        </div>
    )
}


export default withRouter(connect(null , mapDispatchToProps)(ProductItem))