import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navlink,
  navlinkItem,
  navlinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navlink}>
          <li className={navlinkItem}><Link to="/" className={navlinkText}>Home</Link></li>
          <li className={navlinkItem}><Link to="/about" className={navlinkText}>About</Link></li>
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