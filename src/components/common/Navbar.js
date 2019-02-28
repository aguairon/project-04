import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }

    // this.logout = this.logout.bind(this)
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

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <div className="logo"></div>
            </Link>
            <form>
              <div className="field searchbar">
                <div className="control">
                  <p className="control has-icons-left">
                    <input className="input" type="text" placeholder="Text input" />
                    <span className="icon is-small is-left" >
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
              </div>
            </form>
            <a className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/cheeses">Discover the creatures</Link>
              <a className="navbar-item" onClick={this.logout}>Logout</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)


// {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Add a cheese</Link>}
// {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
// {!Auth.isAuthenticated() &&<Link className="navbar-item" to="/login">Login</Link>}
// {Auth.isAuthenticated() &&<a className="navbar-item" onClick={this.logout}>Logout</a>}
