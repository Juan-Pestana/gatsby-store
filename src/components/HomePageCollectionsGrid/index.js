import React from 'react'

import {OtherCollectionsWrapper} from './styles'
import CollectionTile from '../CollectionTile'

const HomepageCollectionsGrid = ({collections}) => {

    const saleCollection = collections.find(collection => collection.node.title === 'Oferta')
    const otherCollections = collections.filter(collection => collection.node.title !== "Oferta")
    console.log(otherCollections)
    return (
        <div>
            {saleCollection && 
                <CollectionTile
                sale
                destination={`/allProducts?c=${encodeURIComponent(saleCollection.node.shopifyId)}`}
                title={saleCollection.node.title}
                description={saleCollection.node.description}
                backgroundImage={saleCollection.node.image.localFile.childImageSharp.fluid}
                    />}
            <OtherCollectionsWrapper>
                {otherCollections.map(collection=>
                    <CollectionTile
                    destination={`/allProducts?c=${encodeURIComponent(collection.node.shopifyId)}`}

                    title={collection.node.title}
                    description={collection.node.description}
                    backgroundImage={collection.node.image.localFile.childImageSharp.fluid}
                    key= {collection.node.shopifyId}/>
                )}
            </OtherCollectionsWrapper>
            
        </div>
    )
}

export default HomepageCollectionsGrid
