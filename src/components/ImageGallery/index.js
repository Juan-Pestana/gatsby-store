import React, {useState, useEffect} from 'react'
import Image from 'gatsby-image'
import {ImageGalleryWrapper} from './styles'
import ImageThumbnails from './ImageThumbnails'

export function ImageGallery ({images, selectedVariantImageId}) {

    const[activeImageThumbnail, setActivImageThumbnail] = useState(
        images.find(({id}) => id === selectedVariantImageId) || images[0]
        )
    
    useEffect(()=>{
        setActivImageThumbnail(images.find(({id}) => id === selectedVariantImageId) || images[0])
    },[selectedVariantImageId, setActivImageThumbnail,images])



    const handleClick = (image) =>{
        setActivImageThumbnail(image)
    }

    return (
        <div>
            <ImageGalleryWrapper>
                <div>
                    <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid}/>
                </div>
                <div>
                    {images.map(image =>
                    <ImageThumbnails 
                        key={image.id} 
                        onClick={handleClick}
                        isActive={activeImageThumbnail.id === image.id} 
                        image={image}/>)}
                </div>
            </ImageGalleryWrapper>
        </div>
    )
}


