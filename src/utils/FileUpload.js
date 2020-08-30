import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

function FileUpload({ refreshFunction }) {
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        axios.post('/product/upload/image', formData, config).then(response => {
            if (response.data.result === "success") {
                setImages([...Images, response.data.path])
                refreshFunction([...Images, response.data.path])
            } else {
                alert('파일 전송 실패 ' + response.data.result)
            }
        })
    }
    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        refreshFunction(newImages)
    }

    return (
        <div>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                )}
            </Dropzone>
            <div>
                {Images.map((image, index) => (
                    <div onClick={() => deleteHandler(image)} key={index}><img src={`http://localhost:8080/${image}`}></img></div>
                ))}
            </div>
        </div>
    )
}

export default FileUpload
