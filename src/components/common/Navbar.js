import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const  {logout} = this.props
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <div className="logo"></div>
            </Link>
            <a className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/articles">Discover the creatures</Link></div>
            <div className="navbar-end">
              <a className="navbar-item" onClick={logout}>Logout</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
