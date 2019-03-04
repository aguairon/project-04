import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

class ProfileShow extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios
      .get('api/me', { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>
    return(
      <section className="section">
        <div className="container profile">
          <h1 className="title is-1">{this.state.data.username}</h1>
          <h1 className="title is-2">{this.state.data.email}</h1>
        </div>
        
      </section>
    )
  }
}


export default ProfileShow
