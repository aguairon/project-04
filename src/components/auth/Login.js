import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      errors: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { value, name }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data, errors: '' })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('api/login', this.state.data)
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
          <form onSubmit={this.handleSubmit}>
            <h2 className="title is-4">Login</h2>
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
              {this.state.errors.message && <small className="help is-danger">{this.state.errors.message}</small>}
            </div>
            <button className="button is-info">Log In</button>

          </form>
          <a
            className="swap_form"
            onClick={this.props.handleToggle}
          >
            Not a member? Please register
          </a>
        </div>
      </main>
    )
  }
}

export default Login
