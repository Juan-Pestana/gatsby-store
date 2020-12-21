import React, {useContext} from 'react'

import ProductContext from '../../context/ProductContext'

import ProductGrid from '../ProductsGrid'

const FeaturedProducts = () => {
    const {collections} = useContext(ProductContext)

    const featuredCollection = collections.find(collection => collection.node.title === 'Top ventas')

    console.log(featuredCollection);

    return (
        <section>
            <h1>Featured Hats</h1>
            <ProductGrid products= {featuredCollection.node.products}></ProductGrid>
        </section>
    )
}

export default FeaturedProducts
