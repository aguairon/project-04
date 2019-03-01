import React from 'react'
import axios from 'axios'

class ArticleShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/articles/${this.props.match.params.id}`)
      .then(res => this.setState({ article: res.data }))
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
          <div className='likes'>
            <span className="icon likes is-big is-left" >
              <i className="fas fa-2x fa-thumbs-up"></i>
            </span>
            <p>This has been liked by {this.state.article.liked_by.length} other user</p>
          </div>
          <div className="tile is-parent is-vertical">
            {messages.map(message =>
              <article key={message.id} className="tile message is-child notification is-danger">
                <div className="content">
                  <p>{message.content}</p>
                  <p>{message.sender.username} <span>{message.updated_at}</span></p>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleShow
