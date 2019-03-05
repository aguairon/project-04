import React from 'react'
import axios from 'axios'
import ProfilePanel from './ProfilePanel'

class ProfilesIndex extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }))
  }

  render() {
    if(!this.state.users) return null
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Users</h1>
          <div className="tile is-ancestor">
            {this.state.users.map(user =>
              <div key={user.id} className="tile">
                <ProfilePanel  {...user}/>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default ProfilesIndex
