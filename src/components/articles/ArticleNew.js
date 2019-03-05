import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class ArticleNew extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        title: '',
        content: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/articles',
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => this.props.history.push(`/articles/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <h1 className="title is-1">New article</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  placeholder="Article title"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.data.title|| ''}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Please write your article here"
                  onChange={this.handleChange}
                  name="content"
                  value={this.state.data.content || ''}
                />
              </div>
            </div>

            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

export default ArticleNew
