import React, { useState, useEffect } from 'react'
import FileUpload from '../utils/FileUpload'
import axios from 'axios'


function UploadPage(props) {
    const [Name, setName] = useState("")
    const [Desc, setDesc] = useState("")
    const [Price, setPrice] = useState("")
    const [Continent, setContinent] = useState(1)
    const [Continents, setContinents] = useState([])
    const [Images, setImages] = useState([])

    useEffect(() => {
        axios.get('/product/continents').then(response => {
            setContinents(response.data)
        })
    }, [])

    const onNameChangeHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onDescChangeHandler = (event) => {
        setDesc(event.currentTarget.value)
    }
    const onPriceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const ContinentsHandler = (event) => {
        setContinent(event.currentTarget.value)
    }
    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Name || !Desc || !Price || !Continent || !Images) {
            return alert("모든 값을 넣어주셔야 합니다")
        }
        const body = {
            title: Name,
            writer: 'admin@admin.com',
            desc: Desc,
            price: Price,
            images: Images,
            continent: Continent
        }
        axios.post('/product/upload', body).then(response => {
            if (response.data.result === "success") {
                alert('성공')
                props.history.push('/')
            }
            else
                alert('실패')
        })
    }

    return (

        <div>
            <h2>여행 상품 업로드</h2>
            <form onSubmit={submitHandler}>
                <FileUpload refreshFunction={updateImages} />
                <label>이름</label>
                <input type="text" onChange={onNameChangeHandler} value={Name}></input>
                <label>설명</label>
                <input type="textarea" onChange={onDescChangeHandler} value={Desc}></input>
                <label>가격</label>
                <input type="text" onChange={onPriceChangeHandler} value={Price}></input>
                <select onChange={ContinentsHandler} value={Continent}>
                    {Continents.map(item => (
                        <option key={item.continentId} value={item.continentId}>{item.name}</option>
                    ))}
                </select>
                <button type="submit">확인</button>
            </form>
        </div>
    )
}

export default UploadPage
