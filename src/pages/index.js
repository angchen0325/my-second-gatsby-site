// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react"  

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const IndexPage = () => {
  return (
    <main>
        <h1>Welcome to my second Gatsby site!</h1>
        <p>I'm making this to be familiar with Gatsby and React.</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>