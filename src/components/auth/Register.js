import React from 'react'

const Register = ({ handleSubmit, data, handleChange}) => {
  console.log(data)
  return (
    <main className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="field">
            <div className="control">
              <input
                className="input"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
          </div>
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
          </div>
          <div className="field">
            <div className="control">
              <input
                type="password"
                className="input"
                name="password_confirmation"
                placeholder="Password confirmation"
                value={data.password_confirmation}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="button is-info">Register</button>

        </form>
      </div>
    </main>
  )
}

export default Register
