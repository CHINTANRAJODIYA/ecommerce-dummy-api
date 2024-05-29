import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { LuDot } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Head from './Head';
import { useDispatch } from 'react-redux';
import { addproduct } from './cart/cartslice';

function Dummyapi() {

    const dispatch=useDispatch();

    const [dataa, setdataa] = useState([]);
    const [pro, setpro] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setdataa(res.data);
                // console.log(res.data);
            })
        axios.get('https://dummyjson.com/products')
            .then((res2) => {
                setpro(res2.data.products);
                console.log(res2.data.products);
            })
            .catch(error => {
                console.log(error);
            })
    },[])

    const Catepro = (CateName) =>{
        axios.get(`https://dummyjson.com/products/category/${CateName}`)
        .then((res2)=>{
            setpro(res2.data.products)
            console.log(res2.data.products)
            console.log('hyy')
        })
    }

    return (
        <>
           <Head />

            {/* category */}

            <div className='bg-all'>
                <Container>
                    <Row>
                        <Col lg={2} className='bg-side-menu'>
                            <table className='mt-4'>
                                <tr>
                                    <td className='main-title'>Select Product Categories</td>
                                </tr>
                                {
                                    dataa.map((item) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td className='mt-2 Cate-title'>&nbsp;<LuDot /><span onClick={()=>{Catepro(item.name)}}>{item.name}</span></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </table>
                        </Col>
                        <Col lg={10}>
                            <Row>
                                <Col lg={10}>
                                    <input type="text" placeholder='search for anything' />
                                </Col>
                                <Col lg={2}>
                                    <div className='icon'><IoSearchOutline /></div>
                                </Col>
                            </Row>
                                <Row className='mt-3'>
                                    {
                                        pro.map((item) => {
                                            return (
                                                <>
                                                    <Col lg={4}>
                                                        <Card className='card' style={{ width: '18rem' , marginBottom:'50px' }}>
                                                        <Link to={`/product/${item.id}`} className='no-dec'>
                                                            <Card.Img variant="top" height={250}src={item.thumbnail} />
                                                        </Link>
                                                            <Card.Body>
                                                                <Card.Title>{item.title}</Card.Title>
                                                                <Card.Text>
                                                                    {item.description}
                                                                </Card.Text>
                                                                <Row>
                                                                    <Col lg={9}><div className='fw-medium'>${item.price} <CiHeart /></div><div className='no-break1 box'>({item.discountPercentage}% off)</div></Col>
                                                                    <Col className='cart'><button type='submit' onClick={()=>dispatch(addproduct(item))}><FaOpencart /></button></Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </>
                                            )
                                        })
                                    }
                                </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Dummyapi