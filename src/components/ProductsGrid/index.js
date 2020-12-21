import React from 'react'
import {ProductsGridWrapper} from './styles'

import ProductTile from '../ProductTile'

const ProductGrid = ({products}) => {
    return (
        <ProductsGridWrapper>
            {products.map(product =>(
            <ProductTile key= {product.shopifyId} 
            minPrice={product.priceRange.minVariantPrice.amount}
            handle={product.handle}
            title={product.title} 
            description={product.description}
            imageFluid={product.images[0].localFile.childImageSharp.fluid}/>))}
        </ProductsGridWrapper>
    )
}

export default ProductGrid
