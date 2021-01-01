/*eslint-disable jsx-a11y/no-onchange*/

import React, {useContext, useEffect, useState} from 'react'
import {graphql} from 'gatsby'
import {Layout, ImageGallery, ProductQuantityAdder} from 'components'
import {Button} from '../../components/Button'
import {SEO} from '../../components/SEO'
import {Grid, SelectWrapper, Price} from './styles'
import CartContext from 'context/CartContext'
import {navigate, useLocation} from '@reach/router'
import queryString from 'query-string'

export const query = graphql`
    query ProductQuery($shopifyId: String){

            shopifyProduct(shopifyId: {eq: $shopifyId}
            ) {
                ...ShopifyProductFields
              }
            }
    

`

const ProductTemplate = (props) => {
  
  
    const [product, setProduct] =useState(null)
    const [selectedVariant, setSelectedVariant] =useState(null)
    const {getProductById} = useContext(CartContext)

    const {search, origin, pathname} = useLocation()

    ;
    const variantId = queryString.parse(search).variant;

    const {title, description, images, shopifyId} = props.data.shopifyProduct

    

    useEffect(()=>{
      getProductById(shopifyId).then(result =>{
        setProduct(result)
        setSelectedVariant(result.variants.find(({id}) => id === variantId) || result.variants[0])
      })
   
    },[shopifyId, getProductById, setProduct, variantId])


    const handleVariantChange = e =>{

      const newVariant =product?.variants.find(variant => variant.id === e.target.value)
      setSelectedVariant(newVariant)
      //empezar con la adaptación de la url 
      navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`, {replace: true})
    }

    return (
        <Layout>
          <SEO description= {description} title={title}/>
          <Button onClick={()=>navigate(-1)}>Productos</Button>
            <Grid>
                <div>
                <h1>{title}</h1>
                <p>{description}</p>
                {product?.availableForSale && selectedVariant && 
                <>
                  {product.variants.length > 1 && 
                  <SelectWrapper>
                    <strong>Variant</strong>
                    <select 
                      value={selectedVariant.id} 
                      onChange={handleVariantChange}>
                        {product?.variants.map(variant =>(<option key={variant.id} value={variant.id}>{variant.title}</option>))}
                    </select>
                  </SelectWrapper>}

                  {selectedVariant&& 
                  <>
                    <Price>
                     {selectedVariant.price} €
                    </Price>
                    <ProductQuantityAdder 
                      available={selectedVariant.available}
                      variantId={selectedVariant.id}/>
                  </>
                  }
                    
                    
                </>}
                </div>
                <div>
                    <ImageGallery 
                    selectedVariantImageId={selectedVariant?.image.id}
                    images={images}/>
                </div>
            </Grid>
          
        </Layout>
    )
}

export default ProductTemplate
