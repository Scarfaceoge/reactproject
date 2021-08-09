import React from 'react';
import { Card , CardImg , CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


export function RenderHomeItem({homeImage}){
    return (
            <Card>
                <Link to={`/home/${homeImage.id}`}>
                    <CardImg src={homeImage.src} width='100%' alt={homeImage.title} />
                    <CardTitle><h4>{homeImage.title}</h4></CardTitle>
                </Link>
            </Card>
    )
}

function Home(props){
    const home = props.homeImages.map( homeImage => {
        return(
            
            <div key={props.homeImages.id} className='col-md-5 my-3'>
                <RenderHomeItem homeImage={homeImage} />
            </div>
        )
    })

    return(
        <div className= 'container'>
            <div className='row justify-content-center'>
                {home}
            </div>
        </div>
    )

}

export default Home;