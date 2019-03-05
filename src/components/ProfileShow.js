import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ArticlePanel from './articles/ArticlePanel'

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
    if (e.target.id === 'articles') {
      this.setState({articles: true, likes: false, details: false})
    } else if (e.target.id === 'likes'){
      this.setState({articles: false, likes: true, details: false})
    } else {
      this.setState({articles: false, likes: false, details: true})
    }
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>
    const  {articles, likes, details } = this.state
    const {created_articles, email, created_at} = this.state.data
    return(
      <section className="section">
        <div className="container profile">
          <h1 className="title is-1">{this.state.data.username}</h1>
        </div>
        <div className="container profile_button">
          <a onClick={this.handleToggle} id="articles" className={articles ? 'button is-rounded is-primary is-selected' : 'button is-rounded'}>Articles you wrote</a>
          <a onClick={this.handleToggle} id="likes" className={likes ? 'button is-rounded is-primary is-selected' : 'button is-rounded'}>Articles you liked</a>
          <a onClick={this.handleToggle} id="details" className={details ? 'button is-rounded is-primary is-selected' : 'button is-rounded'}>Your details</a>
        </div>
        {this.state.articles &&
          <section className="section">
            <div className="container">
              <div className="tile is-ancestor is-vertical">
                {created_articles.map(article => <div key={article.id} className="tile">
                  <ArticlePanel {...article}/>
                </div>)}
              </div>
            </div>
          </section>
        }
        {this.state.likes &&
          <section className="section">
            <div className="container">
              <div className="tile is-ancestor is-vertical">
                {this.state.data.likes.map(like =><div key={like.id} className="tile">
                  <ArticlePanel {...like}/>
                </div>)}
              </div>
            </div>
          </section>
        }
        {this.state.details &&
          <div>
            <h1 className="title is-2">{email}</h1>
            <p>`Created at {created_at}`</p>
          </div>
        }
      </section>
    )
  }
}

export default ProfileShow
