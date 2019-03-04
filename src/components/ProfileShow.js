import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ArticlePanel from './articles/ArticlePanel'
import { Link } from 'react-router-dom'

class ProfileShow extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: true,
      likes: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/me', { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  handleToggle(e) {
    console.log(e.target.id)
    if(e.target.id === 'articles') {
      this.setState({articles: true, likes: false})
    } else {
      this.setState({articles: false, likes: true})
    }
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>
    return(
      <section className="section">
        <div className="container profile">
          <h1 className="title is-1">{this.state.data.username}</h1>
          <h1 className="title is-2">{this.state.data.email}</h1>
        </div>
        <div className="container articles">
          <a onClick={this.handleToggle} id="articles" className="button is-rounded is-danger is-selected">Articles you wrote</a>
          <a onClick={this.handleToggle} id="likes" className="button is-rounded">Articles you liked</a>
        </div>
        {this.state.articles && <div className="tile is-ancestor is-vertical">
          {this.state.data.created_articles.map(article => <div key={article.id} className="tile">
            <ArticlePanel {...article}/>
          </div>)}
        </div>}
        {this.state.likes && this.state.data.likes.map(like =>
          <Link to={`/articles/${like.id}`} key={like.id}>{like.title}</Link>
        )}
      </section>
    )
  }
}

export default ProfileShow
