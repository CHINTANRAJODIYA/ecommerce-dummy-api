import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Row,Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Head from './Head';
import { FaRegStar } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function Prodetail() {

    const [product, setproduct] = useState("");
    const [image, setimage] = useState([]);
    const [thumb,setthumb] = useState();


    const params = useParams();



    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then((res3) => {
                setproduct(res3.data);
                setimage(res3.data.images);
                setthumb(res3.data.thumbnail)
            })

    }, [])


    return (
        <div className='bg-all'>
            <Head />
            <Container className='bg-all'>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={12} className='pro-title mt-5'>Product Details :</Col>
                            <Col lg={12} className='pro-name mt-1'>{product.title}</Col>
                            <Col lg={12} className='pro-title mt-3'>Brand: {product.brand}</Col>
                            <Col lg={12} className='pro-title mt-4'>Category: {product.category}</Col>
                            <Col lg={12} className='pro-title mt-4'>Description: {product.description}</Col>
                            <Col lg={12} className='pro-title mt-4'>Stock Remaining: {product.stock}</Col>
                            <Col lg={12} className='rat-icon mt-4'><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /> | &nbsp;<FaPenFancy /> Write a Review</Col>
                            <Col lg={12} className='pro-title mt-4'>Quantity : </Col>
                            <Col lg={12} className='mt-2'><button className='btn me-2'><FaPlus /></button>0<button className='ms-2 btn'><FaMinus /></button></Col>
                            <Col lg={12} className='pro-rs mt-4'>Rs.{product.price}</Col>
                            <Col lg={12} className='pro-save'> ({product.discountPercentage})%off</Col>
                            <Col lg={3} className='mt-4'><button className='btn-buy'>Add To Cart</button></Col>
                            <Col lg={6} className='mt-4'><button className='btn-buy'>Buy it Now</button></Col>
                        </Row>
                    </Col>
                    <Col lg={5}>
                        <Row className='mt-5'>
                            <Col lg={12}><Image className='image-style' src={thumb} alt="" /></Col>
                        </Row>
                            <Row className='px-row'></Row>
                        <Row>
                        {
                            image.map((item) => (
                                <>
                                    <Col sm={3} className='mb-2' onClick={(a)=>{setthumb(a.target.src)}}><img src={item} alt="" width={130} height={120}/></Col>
                                </>
                            ))
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Prodetail