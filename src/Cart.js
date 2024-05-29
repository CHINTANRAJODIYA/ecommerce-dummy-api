import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Head from './Head';
import Col from 'react-bootstrap/Col';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";



function Cart() {


    const cart = useSelector((state) => state.cart.cart)

    return (
        <>
            <Head />
            <Container>
                <Row>
                    <div className='cart-title mt-4'>
                        YOUR CART
                    </div>
                </Row>
                <Row className='mt-5'>
                    <Col lg={5}><div className='cart-head'>Item</div></Col>
                    <Col lg={2}><div className='cart-head'>Price</div></Col>
                    <Col lg={3}><div className='cart-head'>Quantity</div></Col>
                    <Col lg={2}><div className='cart-head'>Total</div></Col>
                </Row>
                <hr />

                {
                    cart.map((product) => {
                        return (
                            <Row>
                                <Col lg={2}><div className='cart-img'><img src={product.thumbnail} alt="" height={200} width={200} /></div></Col>
                                <Col lg={3}>
                                    <div className='cart-pro-title ms-2'>{product.title}</div>
                                    <div className='cart-pro-cate ms-2'>Category : {product.category}</div>
                                    <div className='cart-pro-des ms-2'>{product.description}</div>
                                </Col>
                                <Col lg={2}><div className='cart-price mt-5'>${product.price}</div></Col>
                                <Col lg={3} className='mt-5'>
                                    <button className='cart-quan-btn1'><FaPlus /></button>
                                    <button className='cart-quan-btn2' disabled>0</button>
                                    <button className='cart-quan-btn3'><FaMinus /></button>
                                </Col>
                                <Col lg={2}>
                                    <div className='cart-price mt-5'>${product.price}</div>
                                </Col>
                            </Row>
                        )
                    })
                }


            </Container>
        </>
    )
}

export default Cart