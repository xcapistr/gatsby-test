import { Link } from 'gatsby'
import * as React from 'react'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'

const Layout = ({ title, children }) => (
  <div className={container}>
    <title>{title}</title>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{title}</h1>
      {children}
    </main>
  </div>
)

export default Layout
