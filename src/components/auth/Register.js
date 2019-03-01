import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        
      },
      error: ''
    }


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: { value, name }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data, error: '' })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('api/register', this.state.data)
      .then((res)=>{
        Auth.setToken(res.data.token)
        this.setState({show_modal: false, data: {}})
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
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
            </div>
            <button className="button is-info">Register</button>

          </form>
          <a
            className="swap_form"
            onClick={this.props.handleToggle}
          >
          Already a member? Login in
          </a>
        </div>
      </main>
    )
  }
}

export default Register
