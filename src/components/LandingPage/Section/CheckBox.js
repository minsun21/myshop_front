import React, { useState, Fragment } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

function CheckBox({ list }) {
    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value)

        const newChecked = [...Checked]
        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
    }

    const renderCheckBoxLists = () => list && list.map((value, index) => (
        <Fragment key={index} >
            <Checkbox onChange={() => handleToggle(value._id)}
                checked={Checked.indexOf(value._id) === -1 ? false : true} />
            <span>{value.name}</span>
        </Fragment>
    ))


    return (
        <div>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="This is panel header 1" key="1">
                    {renderCheckBoxLists()}
                </Panel>

            </Collapse>
        </div>
    )
}

export default CheckBox
