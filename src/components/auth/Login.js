import React from 'react'

const Login = ({ handleSubmit, data, handleChange, error}) => {
  return (
    <main className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="field">
            <div className="control">
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
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
                value={data.password}
                onChange={handleChange}
              />
            </div>
            {error && <small className="help is-danger">{error}</small>}
          </div>
          <button className="button is-info">Log In</button>

        </form>
      </div>
    </main>
  )
}

export default Login