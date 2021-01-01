import React, {useContext} from 'react'
import ProductContext from '../../context/ProductContext'
import CategoryFilterItem from './CategoryFileterItem'
import {FiltersWrapper} from './styles'

const Filters = () => {

    const {collections} = useContext(ProductContext)

    return (
    
            
            <FiltersWrapper>
            <strong>Categories</strong>
            {collections.map(collection => 
                <CategoryFilterItem key={collection.node.shopifyId} id = {collection.node.shopifyId} title={collection.node.title}/> )}
            </FiltersWrapper>
           
        
    )
}

export default Filters
