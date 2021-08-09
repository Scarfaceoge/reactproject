import React from 'react';
import { Card , CardImg} from 'reactstrap';

export function HomeInfo(props) {
    return(
        <div className='row'>
            <div className='col-md-5'>
                <Card>
                    <CardImg src={props.homeImage.src} alt={props.homeImage.title} width='100%'/>
                </Card>
            </div>
            <div className='col-md-5'>

            </div>
        </div>
    )
}

function HomeItem(props) {
    return(
        <div className='container'>
            <HomeInfo homeImage={props.homeImage}/>
        </div>
    )
}

export default HomeItem;
