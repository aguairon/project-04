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
      already_member: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    axios.get('/api/articles')
      .then(res => this.setState({ articles: res.data, filtered_articles: res.data }))
  }

  handleToggle() {
    this.setState({already_member: !this.state.already_member})
  }

  logout() {
    Auth.removeToken()
    this.setState({show_modal: true})
  }

  render() {
    if(!this.state.articles) return <h1>Loading...</h1>
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
              handleToggle={this.handleToggle}
            />}
          </Modal>

          <Switch>
            <Route path="/articles/:id" component={ArticleShow} />
            <Route
              path="/articles"
              component={() =>
                <ArticleIndex />}
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
