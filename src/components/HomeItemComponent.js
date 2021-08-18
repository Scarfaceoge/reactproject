import React from 'react';
import { Card , CardImg , CardBody , CardTitle , Breadcrumb , BreadcrumbItem }  from 'reactstrap';
import { Link } from 'react-router-dom';


export function HomeInfo({homeImage}) {
    console.log(homeImage.src)
    return(
        <>
            <div className='row'>
                <div className='col'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home' className='text-link'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>{homeImage.title}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className='row m-3'>
                <div className='col-md-5'>
                    <Card>
                        <CardImg
                            top
                            src={homeImage.src}
                            width='100%'
                            alt={homeImage.title}
                        />
                        <CardBody>
                            <CardTitle><h4>{homeImage.title}</h4></CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-md-5 offset-1'>
                    <h4>{homeImage.description}</h4>
                </div>
            </div>
        </>
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
