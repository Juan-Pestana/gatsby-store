import React from 'react'
import {Layout} from 'components'
import CartContents from '../components/CartContents'
import {SEO} from '../components/SEO'

export default function cart() {
    return (
        <Layout>
            <SEO title= 'Carrito' description= 'Gatsby Sombreros Carrito'/>

            <CartContents></CartContents>
        </Layout>
    )
}


