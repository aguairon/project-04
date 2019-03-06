import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      errors: ''
    }


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: { value, name }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data, errors: '' })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('api/register', this.state.data)
      .then((res)=>{
        Auth.setToken(res.data.token)
        this.setState({ data: {}})
        this.props.changeState()
      })
      .catch(err => this.setState({errors: err.response.data}))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="logo"></div>
          <form onSubmit={this.handleSubmit}>
            <h2 className="title is-4">Register</h2>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  value={this.state.data.username || ''}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={this.state.data.email || ''}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  value={this.state.data.password || ''}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  type="password"
                  className="input"
                  name="password_confirmation"
                  placeholder="Password confirmation"
                  value={this.state.data.password_confirmation || ''}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password_confirmation && <small className="help is-danger">{this.state.errors.password_confirmation}</small>}
              {this.state.errors.message && <small className="help is-danger">{this.state.errors.message}</small>}
            </div>
            <button className="button is-info">Register</button>

          </form>
          <a
            className="swap_form"
            onClick={this.props.handleToggle}
          >
          Already a member? Sign in
          </a>
        </div>
      </main>
    )
  }
}

export default Register
