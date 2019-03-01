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
import Register from './components/auth/Register'

// const input = '# This is a header\n\nAnd this is a paragraph\n\nThis block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      show_modal: false,
      articles: [],
      data: {
      },
      error: '',
      already_member: false
    }
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    axios.get('/api/articles')
      .then(res => this.setState({ articles: res.data, filtered_articles: res.data }))
  }

  handleLoginChange({target: { value, name }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data, error: '' })
  }

  handleLoginSubmit(e){
    e.preventDefault()
    axios
      .post('api/login', this.state.data)
      .then((res)=>{
        Auth.setToken(res.data.token)
        this.setState({show_modal: false, data: {}})
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }

  handleRegisterSubmit(e){
    e.preventDefault()
    axios
      .post('api/register', this.state.data)
      .then((res)=>{
        Auth.setToken(res.data.token)
        this.setState({show_modal: false, data: {}})
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }

  handleToggle() {
    this.setState({already_member: !this.state.already_member})
  }

  logout() {
    this.props.history('/')
    Auth.removeToken()
    this.setState({show_modal: true})
  }

  render() {
    if(this.state.articles.length < 1) return <h1>Loading...</h1>
    return (
      <BrowserRouter>
        <main>
          {Auth.isAuthenticated() &&
          <Navbar
            logout={this.logout}
          /> }
          <Modal
            isOpen={!Auth.isAuthenticated()}
            show='true'
            className="Modal"
            enforceFocus='true'
          >
            {this.state.already_member && <Login
              handleSubmit={this.handleLoginSubmit}
              handleChange={this.handleLoginChange}
              data={this.state.data}
              error={this.state.error}
              handleToggle={this.handleToggle}
            />}
            {!this.state.already_member &&<Register
              handleSubmit={this.handleRegisterSubmit}
              handleChange={this.handleLoginChange}
              data={this.state.data}
              handleToggle={this.handleToggle}
            />}
          </Modal>

          <Switch>
            <Route path="/articles/:id" component={ArticleShow} />
            <Route
              path="/articles"
              component={() =>
                <ArticleIndex
                  articles={this.state.filtered_articles}
                  handleChange={this.handleSearchChange}
                  value={this.state.searchValue}
                  handleSubmit={this.handleSearchSubmit}
                />}
            />
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
