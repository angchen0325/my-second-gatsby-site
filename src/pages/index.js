// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react"  
// import { Link } from "gatsby"
import Layout from "../components/layout"

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>