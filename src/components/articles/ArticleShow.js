import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import MessagesIndex from '../../components/messages/MessagesIndex'

class ArticleShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => this.setState({ article: res.data }))
  }

  componentDidUpdate() {
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => this.setState({ article: res.data }))
  }

  handleClick() {
    if(!this.state.article.liked_by.some(like => Auth.isCurrentUser(like.id))) {
      axios
        .put(`/api/articles/${this.props.match.params.id}/like`,
          {},
          { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(res => console.log(res))
        .catch(err => this.setState({error: err.response.status}))
    } else {
      axios
        .delete(`/api/articles/${this.props.match.params.id}/like`,
          { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(res => console.localeCompare(res))
        .catch(err => this.setState({error: err.response.status}))
    }
  }

  render() {
    if(!this.state.article) return null
    const  {title, content, messages} = this.state.article
    return(
      <section className="section">
        <div className="container">
          <h1 className='title is-1'>{title}</h1>
          <article className="tile article is-child notification is-danger">
            <div className="content">
              {content}
            </div>
          </article>
          <div className={this.state.article.liked_by.some(like =>
            Auth.isCurrentUser(like.id)) ? 'likes liked_by_user' : 'likes'}>
            <button className='button' onClick={this.handleClick}>
              <span className="icon is-big is-left" >
                <i className="fas fa-2x fa-thumbs-up"></i>
              </span>
            </button>
            {this.state.error === 403 && <p>You cannot like your own article.</p>}
            {this.state.article.liked_by.length > 0 && this.state.article.liked_by.map(like => Auth.isCurrentUser(like.id)) &&<p>You have liked this.</p> }
            {this.state.article.liked_by.length === 1 && <p>This article has been liked once.</p>}
            {this.state.article.liked_by.length > 1 && <p>This article has been liked {this.state.article.liked_by.length} times.</p>}
            {this.state.article.liked_by.length === 0 && <p>This article has not been liked yet.</p>}
          </div>
          <div className="tile is-parent is-vertical">
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>
            <MessagesIndex messages={messages} />
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleShow
