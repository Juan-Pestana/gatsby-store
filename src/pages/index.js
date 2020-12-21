import React, {useContext} from 'react';
import { Layout, SEO } from 'components';
import  ProductContext from '../context/ProductContext'
import HomepageCollectionsGrid from '../components/HomePageCollectionsGrid'
import FeaturedProducts from '../components/FeaturedProducts'

const IndexPage = () => {

    const {collections} = useContext(ProductContext)
    


  return(
    <Layout>
      <HomepageCollectionsGrid collections = {collections.filter(collection=> collection.node.title !== 'Top ventas' )}/>
      <FeaturedProducts/>
    </Layout>

  )
 
}

export default IndexPage;
