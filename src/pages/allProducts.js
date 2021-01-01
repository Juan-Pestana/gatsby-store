import React, {useContext} from 'react';
import styled from 'styled-components'
import queryString from 'query-string'
import {useLocation} from '@reach/router'

import  ProductContext from '../context/ProductContext'
import {Layout} from 'components'
import Filters from '../components/Filters'
import ProductsGrid from '../components/ProductsGrid'
import {SEO} from '../components/SEO'


const Content = styled.div`
     display: grid;
     grid-gap: 20px;
     margin-top: 20px;
    grid-template-columns: 1fr;

    @media(min-width: 768px){
        grid-template-columns: 1fr 3fr;
    }
 `;

const AllProducts = () => {

    const {products, collections} = useContext(ProductContext)
    const {search} = useLocation()
 
    const qs = queryString.parse(search)

    const selectCollectionIds = qs.c?.split(',').filter(c => !!c) || [];

    const selectedCollectionIdsMap = {};

    const searchTerm = qs.s

    selectCollectionIds.forEach(collectionId =>{
         selectedCollectionIdsMap[collectionId] = true;
      })

    const collectionProductMap ={}

    if(collections){
        collections.forEach(collection =>{
            collectionProductMap[collection.node.shopifyId] ={};

        collection.node.products.forEach(product =>{
            collectionProductMap[collection.node.shopifyId][product.shopifyId] = true
        })
        })
    }


    const filterByCategory = product =>{
        if(Object.keys(selectedCollectionIdsMap).length){
            for (let key in selectedCollectionIdsMap){
                if (collectionProductMap[key]?.[product.shopifyId]){
                    return true
                }
            }
            return false
        }
        return true
    }

    const fileterBySearchTerm = product =>{
        if(searchTerm){
            return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        }
        return true
    }

    const filteredProducts = products.filter(filterByCategory).filter(fileterBySearchTerm)

    return (
        <Layout>
            <SEO title= 'todos los sombreros' description= 'Página de productos'/>
            {!!searchTerm && !!filteredProducts.length && 
            <h3>Busqueda: <strong>'{searchTerm}'</strong></h3>}
            {!!filteredProducts.length &&
            <h4>{filteredProducts.length} Products</h4>}
            
            <Content>
                <Filters/>
                {!filteredProducts.length &&
                    <div>
                        <h3>
                            <span>Ups. parece que no hay coincidencias con</span>
                            &nbsp;
                            <strong>'{searchTerm}'</strong>    
                        </h3>
                        <div>
                            a lo mejor puedes intentar:
                            <br/>
                            <br/>
                            <ul>
                                <li>Revisar la ortografía</li>
                                <li>Utilizar menos palabras</li>
                                <li>Probar con otra búsqueda</li>
                            </ul>
                        </div>
                    </div>
                }
                {!!filteredProducts.length &&
                    <div>Products
                    <ProductsGrid products ={filteredProducts}/>
                    </div>  
                }
                
                
            </Content>
            
        </Layout>
    )
}

export default AllProducts
