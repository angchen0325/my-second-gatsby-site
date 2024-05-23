// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react"  
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image" 
import Seo from "../components/seo"

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

