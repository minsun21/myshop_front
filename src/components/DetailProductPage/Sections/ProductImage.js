import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'

function ProductImage({ detail }) {
    const [Images, setImages] = useState([])
    useEffect(() => {
        console.log(detail)
        if (detail.imagePathList && detail.imagePathList.length > 0) {
            console.log("통과")
            let images = []
            detail.imagePathList.map(item => {
                images.push({
                    original: `http://localhost:8080/${item}`,
                    thumbnail: `http://localhost:8080/${item}`
                })
            })
            setImages(images)
        }
    }, [detail])

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
