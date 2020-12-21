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
                title={saleCollection.node.title}
                description={saleCollection.node.description}
                backgroundImage={saleCollection.node.image.localFile.childImageSharp.fluid}
                    />}
            <OtherCollectionsWrapper>
                {otherCollections.map(collection=>
                    <CollectionTile
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
