import React from 'react'
import { Descriptions } from 'antd'

function PorductInfo({ detail }) {
    const clickHandler = () => {

    }
    return (
        <div>
            <Descriptions
                title="Product Info"
                bordered
            >
                <Descriptions.Item label="Price">{detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{detail.description}</Descriptions.Item>
            </Descriptions>
            <div>
                <button type="button" onClick={clickHandler}>Add to Cart</button>
            </div>
        </div>

    )
}

export default PorductInfo
