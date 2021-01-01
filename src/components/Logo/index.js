import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

const Logo = () => {

    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "logo.png"}) {
          childImageSharp{
              fixed(width: 60){
                  ...GatsbyImageSharpFixed_withWebp
              }
          }
        }
      }

    `)
    console.log(data)

    return <Img fixed = {data.file.childImageSharp.fixed}/>
}

export default Logo
