import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';

const { Panel } = Collapse;

function RadioBox({ list, handleFilters }) {

    const [RadioValue, setRadioValue] = useState(0)

    const renderRadioBoxLists = () => (
        list && list.map(value => (
            <Radio key={value._id} value={value._id}>{value.name}</Radio>
        ))
    )

    const handleChange = (event) => {
        setRadioValue(event.target.value)
        handleFilters(event.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="price" key="1">
                    <Radio.Group onChange={handleChange} value={RadioValue}>
                        {renderRadioBoxLists()}
                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
