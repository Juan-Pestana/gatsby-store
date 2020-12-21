import {graphql} from 'gatsby'

export const productFields = graphql`
    fragment ShopifyProductFields on ShopifyProduct {
        title
        shopifyId
        description
        images {
            id
            localFile {
            childImageSharp {
                fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }

    }
`;