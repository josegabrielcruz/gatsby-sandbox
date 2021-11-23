import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial</p>
      <StaticImage
        alt="Helix Nebula"
        src="../images/archives_helix.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
