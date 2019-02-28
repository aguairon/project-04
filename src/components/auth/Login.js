import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
// import Flash from '../../lib/Flash'

class Login extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   data: {
    //     email: '',
    //     password: ''
    //   }
    // }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange({target: { value, name }}){
  //   const data = {...this.state.data, [name]: value}
  //   this.setState({ data })
  // }

  // handleSubmit(e){
  //   e.preventDefault()
  //   axios
  //     .post('api/login', this.state.data)
  //     .then((res)=>{
  //       Auth.setToken(res.data.token)
  //       this.props.history.push('/articles')
  //     })
  //     .catch(err => alert(err.message))
  // }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.props.handleSubmit}>
            <h2>Login</h2>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={this.props.data.email}
                  onChange={this.props.handleChange}
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
                  value={this.props.data.password}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <button className="button is-info">Log In</button>

          </form>
        </div>
      </main>
    )
  }
}

export default Login
