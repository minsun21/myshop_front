import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PorductInfo from './Sections/PorductInfo'
import ProductImage from './Sections/ProductImage'
import { Col, Row } from 'antd';

function DetailProductPage({ match }) {
    const productId = match.params.productId

    const [Product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
    }, [])

    return (
        <div>
            <h1>{Product.title}</h1>
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}><ProductImage detail={Product} /></Col>
                <Col lg={12} xs={24}><PorductInfo detail={Product} /></Col>

            </Row>
        </div>
    )
}

export default DetailProductPage
