import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    axios.get('/api/videos')
      .then(res => this.setState({videos: res.data}))
  }
  render() {
    if(!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <h1>Youtube</h1>
        <div>{this.state.videos.map(video => {
          <h2 key={video.id}>{video.title}</h2>
        })}
        </div>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root')
)
