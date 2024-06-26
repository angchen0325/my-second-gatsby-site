import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navlink,
  navlinkItem,
  navlinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navlink}>
          <li className={navlinkItem}><Link to="/" className={navlinkText}>Home</Link></li>
          <li className={navlinkItem}><Link to="/about" className={navlinkText}>About</Link></li>
          <li className={navlinkItem}><Link to="/blog" className={navlinkText}>Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout