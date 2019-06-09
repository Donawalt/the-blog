import React from 'react'
import { Link } from 'gatsby'
import '../style/layout.scss'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header>
        <h1
        >
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <h2>by <a href="https://www.donaelwalter.com/">Donaël Walter</a></h2>
        </header>
      )
    } else {
      header = (
        <header>
        <h3
        >
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        </header>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, by &nbsp;<a href="https://www.donaelwalter.com">Donaël WALTER</a>
        </footer>
      </div>
    )
  }
}

export default Layout
