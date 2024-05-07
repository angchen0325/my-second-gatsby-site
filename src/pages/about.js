// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react"  
// import { Link } from "gatsby"
import Layout from "../components/layout"

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm a physics and computer enthusiast who loves to learn new things and create new things.
         <br/>
         Why not aim high and work hard? Try your best and achieve your goals.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage

export const Head = () => <title>About Me</title>

