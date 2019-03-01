import React from 'react'
import axios from 'axios'
import ArticlePanel from '../components/ArticlePanel'

class ArticlesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      articles: [],
      filtered_articles: [],
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    axios.get('/api/articles')
      .then(res => this.setState({ articles: res.data, filtered_articles: res.data }))
  }

  filterArticles() {
    let filtered = this.state.articles
    filtered = filtered.filter(article => {
      return article.title.toLowerCase().search(this.state.search) !== -1
    })
    this.setState({filtered_articles: filtered})
  }

  handleChange({target: {name, value}}){
    this.setState({...this.state, [name]: value})
    this.filterArticles()
  }
  handleSubmit(e){
    e.preventDefault(e)
    this.filterArticles()
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Articles</h1>
          <form className="searchbar" onSubmit={this.handleSubmit}>
            <div className="field searchbar">
              <div className="control">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    value={this.searchValue}
                    onChange={this.handleChange}
                    name='search'
                  />
                  <span className="icon is-small is-left" >
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
          </form>
          <div className="tile is-ancestor is-vertical">
            {this.state.filtered_articles.map(article => <div key={article.id} className="tile">
              <ArticlePanel {...article}/>
            </div>)}
          </div>
        </div>
      </section>
    )
  }
}

export default ArticlesIndex
