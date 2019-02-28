import React from 'react'
import Modal from 'react-modal'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './lib/Auth'
// import  ReactMarkdown from 'react-markdown/with-html'
import axios from 'axios'
import './scss/style.scss'
import Navbar from './components/common/Navbar'
import ArticleIndex from './components/ArticleIndex'
import ArticleShow from './components/ArticleShow'
import Login from './components/auth/Login'


// const input = '# This is a header\n\nAnd this is a paragraph\n\nThis block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      articles: [],
      filtered_articles: [],
      show: false,
      data: {
        email: '',
        password: ''
      }

    }
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
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

  handleLoginChange({target: { value, name }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleLoginSubmit(e){
    e.preventDefault()
    axios
      .post('api/login', this.state.data)
      .then((res)=>{
        Auth.setToken(res.data.token)
        this.setState({show: false})
        this.props.history.push('/articles')
      })
      .catch(err => alert(err.message))
  }

  render() {
    if(this.state.articles.length < 1) return <h1>Loading...</h1>
    return (
      <BrowserRouter>
        <main>
          {Auth.isAuthenticated() &&
          <Navbar
            handleChange={this.handleChange}
            value={this.state.searchValue}
            handleSubmit={this.handleSubmit}
          /> }
          <Modal
            isOpen={!Auth.isAuthenticated()}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >

            <Login handleSubmit={this.handleLoginSubmit} handleChange={this.handleLoginChange} data={this.state.data}/>
          </Modal>

          <Switch>
            <Route path="/articles/:id" component={ArticleShow} />
            <Route path="/login" component={Login} />
            <Route path="/" component={() => <ArticleIndex articles={this.state.filtered_articles} />} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

// ReactDOM.render(
//   <ReactMarkdown
//     source={input}
//     escapeHtml={false}/>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
