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
    return(
      <section className="section">
        <div className="container">
          <h1 className='title is-1'>{this.state.article.title}</h1>
          <article className="tile article is-child notification is-danger">
            <div className="content">
              {this.state.article.content}
            </div>
          </article>
          <div className="tile is-parent">
            {this.state.article.messages.map(message =>
              <article key={message.id} className="tile is-child">
                <div className="content">
                  {message.content}
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
