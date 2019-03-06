import React from 'react'
import Modal from 'react-modal'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import Auth from './lib/Auth'
// import  ReactMarkdown from 'react-markdown/with-html'
import './scss/style.scss'
import SecureRoute from './components/common/SecureRoute'
import Navbar from './components/common/Navbar'
import ArticlesIndex from './components/articles/ArticlesIndex'
import ArticleShow from './components/articles/ArticleShow'
import Login from './components/auth/Login'
import ProfileShow from './components/profiles/ProfileShow'
import ProfilesIndex from './components/profiles/ProfilesIndex'
import Homepage from './components/Homepage'
import ArticleNew from './components/articles/ArticleNew'
import Register from './components/auth/Register'

// const input = '# This is a header\n\nAnd this is a paragraph\n\nThis block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'

Modal.setAppElement('body')

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      show_modal: !Auth.isAuthenticated(),
      already_member: false
    }
    this.changeState = this.changeState.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  changeState(){
    this.setState({...this.state, show_modal: !this.state.show_modal })
  }

  handleToggle() {
    this.setState({already_member: !this.state.already_member})
  }

  render() {
    if(!this.state) return <h1>Loading...</h1>
    return (
      <BrowserRouter>
        <main>
          {Auth.isAuthenticated() &&
          <Navbar
            changeState ={this.changeState}
          /> }
          <Modal
            isOpen={!Auth.isAuthenticated()}
            className="Modal"
            enforceFocus='true'
          >
            {this.state.already_member && <Login
              handleToggle={this.handleToggle}
              changeState ={this.changeState}
            />}
            {!this.state.already_member &&<Register
              handleToggle={this.handleToggle}
              changeState ={this.changeState}
            />}
          </Modal>

          <Switch>
            <SecureRoute path="/me" component={ProfileShow} />
            <SecureRoute path="/users/:id" component={ProfileShow} />
            <SecureRoute path="/users/" component={ProfilesIndex} />
            <SecureRoute path="/articles/new" component={ArticleNew} />
            <SecureRoute path="/articles/:id" component={ArticleShow} />
            <SecureRoute path="/articles" component={ArticlesIndex} />
            <SecureRoute path="/" component={Homepage} />
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
