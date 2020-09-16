import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageSlider from '../../utils/ImageSlider'
import { Col, Card, Row } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import CheckBox from './Section/CheckBox';
import { continents } from './Section/Datas'

const { Meta } = Card;

function LandingPage() {
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(2)
    const [PostSize, setPostSize] = useState(true)
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

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
        return <Col key={index} lg={6} md={8} xs={24}>
            <Card
                cover={<ImageSlider images={product.imagePathList} />}
            >
                <Meta title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })
    const showFilteredResult = (filters) => {
        let body = {
            skip: 0,
            limit: Limit,
            filters: filters
        }
        getProducts(body)
        setSkip(0)
    }

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }
        newFilters[category] = filters

        showFilteredResult()
    }

    return (
        <div>
            <h2>Let's Travel Anywhere<RocketOutlined /></h2>

            {/* Filter */}
            {/* CheckBox */}
            <CheckBox list={continents} handleFilters={filter => handleFilters(Filters, "continents")} />
            {/* RaidoBox */}


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
