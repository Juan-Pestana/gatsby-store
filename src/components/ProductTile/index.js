import React from 'react'

import Img from 'gatsby-image'
import {StyledLink} from '../StyledLink'

import {ProductTileWrapper, Title, Description, Price} from './style'

const ProductTile = ({title, imageFluid, description, minPrice, handle}) => {


    return (
        <ProductTileWrapper>
            <Img fluid={imageFluid}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price>desde: {parseFloat(minPrice).toFixed(2) }€</Price>
            <StyledLink to={`/product/${handle}`}>Ver ahora</StyledLink>
            
        </ProductTileWrapper>
    )
}

export default ProductTile
