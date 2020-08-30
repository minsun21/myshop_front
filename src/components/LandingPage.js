import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageSlider from '../utils/ImageSlider'

function LandingPage() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        // let body = {

        // }
        axios.post().then(response => {
            if (response.data.success) {
                setProducts(response.data.productsInfo)
            } else {
                alert('실패')
            }
        })
    }, [])

    const renderCards = Products.map((product, index) => {
        return <div key={index}><img src={`${product.images[0]}`}></img><div>${product.title}</div></div>
        // <Col key={index} lg={6}>
        // </Col>
    })
    return (
        <div>
            <h2>Let's Travel Anywhere</h2>

            {/* Filter */}
            {/* Search */}
            {/* <Row gutter{16}> */}
            {/* Cards */}
            {renderCards}
            {/* </Row> */}
            <div><button>더보기</button></div>
        </div>
    )
}

export default LandingPage
