import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import MessagesIndex from '../../components/messages/MessagesIndex'
import MessageForm from '../../components/messages/MessageForm'
import ArticleLike from '../articles/ArticleLike'
import MessageShow from '../messages/MessageShow'

class ArticleShow extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        content: ''
      }
    }

    this.handleLike = this.handleLike.bind(this)
    this.handleAddMessage = this.handleAddMessage.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => this.setState({ article: res.data }))
  }

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

  handleAddMessage() {
    this.setState({addingMessage: true})
  }

  handleMessageChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
  }

  handleMessageSubmit(e) {
    e.preventDefault()
    axios
      .post(`/api/articles/${this.props.match.params.id}/messages`,
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({newMessage: res.data, addingMessage: false}))
      .catch(err => this.setState({error: err.response.status}))
  }

  render() {
    if(!this.state.article) return null
    const  {title, content, messages, creator, created_at} = this.state.article
    return(
      <section className="section">
        <div className="container">
          <h1 className='title is-1'>{title}</h1>
          <article className="tile article is-child notification is-danger">
            <div className="content">
              {content}
              <p className='createdBy'> Written by {creator.username} on {created_at}</p>
            </div>
          </article>
          <ArticleLike liked={this.state.liked} likedBy={this.state.article.liked_by} handleLike={this.handleLike} error={this.state.error}/>
          <div className="tile is-parent is-vertical">
            {!this.state.addingMessage && <button onClick={this.handleAddMessage} className="button is-primary">Leave a message</button>}
            {this.state.addingMessage && <MessageForm
              handleSubmit={this.handleMessageSubmit}
              handleChange={this.handleMessageChange}
              data={this.state.data}
            />}
            {this.state.newMessage && <MessageShow message={this.state.newMessage}/>}
            <MessagesIndex messages={messages} />
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleShow
