import React from 'react'
import ReactDOM from 'react-dom'
// import  ReactMarkdown from 'react-markdown/with-html'
// import axios from 'axios'

const input = '# This is a header\n\nAnd this is a paragraph\n\nThis block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'


class App extends React.Component {
  render() {
    // if(!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <h1>Youtube</h1>
        <div>{input}</div>
      </main>
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
