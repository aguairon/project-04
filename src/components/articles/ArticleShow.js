import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import MessagesIndex from '../../components/messages/MessagesIndex'
import MessageForm from '../../components/messages/MessageForm'
import ArticleLike from '../articles/ArticleLike'

class ArticleShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => this.setState({ article: res.data }))
  }
  //
  // componentDidUpdate() {
  //   axios.get(`/api/articles/${this.props.match.params.id}`)
  //     .then(res => this.setState({ article: res.data }))
  // }

  handleLike() {
    if(!this.state.article.liked_by.some(like => Auth.isCurrentUser(like.id))) {
      axios
        .put(`/api/articles/${this.props.match.params.id}/like`,
          {},
          { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(res => this.setState({ article: res.data }))
        .catch(err => this.setState({error: err.response.status}))
    } else {
      axios
        .delete(`/api/articles/${this.props.match.params.id}/like`,
          { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(res => this.setState({ article: res.data }))
        .catch(err => this.setState({error: err.response}))
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
          <ArticleLike liked={this.state.liked} likedBy={this.state.article.liked_by} handleLike={this.handleLike} error={this.state.error}/>
          <div className="tile is-parent is-vertical">
            <MessageForm />
            <MessagesIndex messages={messages} />
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleShow
