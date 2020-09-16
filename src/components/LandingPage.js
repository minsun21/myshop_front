import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageSlider from '../utils/ImageSlider'
import { Col, Card, Row, Spin } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
const { Meta } = Card;

function LandingPage() {
    df
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(2)
    const [PostSize, setPostSize] = useState(true)

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit
        }
        getProducts(body)
    }, [])



    const loadMoreHandler = () => {
        let skip = Skip + (Limit - 1)
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true
        }
        getProducts(body)
        setSkip(skip)
    }

    const getProducts = (body) => {
        axios.post('/product/products', body).then(response => {
            console.log(response.data.hasNext)
            if (body.loadMore) {
                setProducts([...Products, ...response.data.list])
            } else {
                setProducts(response.data.list)
            }
            setPostSize(response.data.hasNext)
        })
    }
    const renderCards = Products.map((product, index) => {
        return <Col lg={6} md={8} xs={24}>
            <Card
                key={index}
                cover={<ImageSlider images={product.imagePathList} />}
            >
                <Meta title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })
    return (
        <div>
            <h2>Let's Travel Anywhere<RocketOutlined /></h2>

            {/* Filter */}
            {/* Search */}
            {/* */}
            {/* Cards */}
            <Row gutter={16}>
                {renderCards}
            </Row>
            {PostSize &&
                <div>
                    <button onClick={loadMoreHandler} >더보기</button>
                </div>
            }

        </div>
    )
}

export default LandingPage
