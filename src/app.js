import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './lib/Auth'
// import  ReactMarkdown from 'react-markdown/with-html'
import axios from 'axios'
import './scss/style.scss'
import Navbar from './components/common/Navbar'
import ArticleIndex from './components/ArticleIndex'
import ArticleShow from './components/ArticleShow'


// const input = '# This is a header\n\nAnd this is a paragraph\n\nThis block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'


class App extends React.Component {
  componentDidMount() {
    axios.get('/api/articles')
      .then(res => this.setState({ articles: res.data }))
  }

  render() {
    if(!this.state) return <h1>Loading...</h1>
    return (
      <BrowserRouter>
        <main>
          {/* {Auth.isAuthenticated() && <Navbar /> } */}
          <Navbar />
          <Switch>
            <Route path="/articles/:id" component={ArticleShow} />
            <Route path="/" component={() => <ArticleIndex articles={this.state.articles} />} />
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
