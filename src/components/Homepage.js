import React from 'react'
import axios from 'axios'
import ArticlePanel from './articles/ArticlePanel'

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios
      .get('/api/articles/desc')
      .then(res => this.setState({articles: res.data}))
      .catch(err => console.log(err.message))

    axios
      .get('/api/users/most')
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err.message))
  }

  render() {
    if(!this.state.articles) return null
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Latest article</h1>
          <div className="tile is-ancestor">
            {this.state.articles.map(article =>
              <div key={article.id} className="tile">
                <ArticlePanel  {...article}/>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Homepage
