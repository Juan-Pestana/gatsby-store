import React from 'react'
import {CollectionTileWrapper, CollectionTileContent, Title, Description} from './style'
import BackgroundImage from 'gatsby-background-image'
import {StyledLink} from '../StyledLink'

const CollectionTile = ({description, title, backgroundImage, sale, destination}) => {
    return (
        <CollectionTileWrapper>
        <BackgroundImage fluid= {backgroundImage}/>
            <CollectionTileContent>
                <div>
                    <Title sale={sale}>
                        {title}
                    </Title>
                    <Description sale={sale}>
                        {description}
                    </Description>
                    <StyledLink to={destination}>Compra ahora</StyledLink>
                </div>
            </CollectionTileContent>         
        </CollectionTileWrapper>
    )
}

export default CollectionTile
