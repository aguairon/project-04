import React from 'react'
import ArticlePanel from '../components/ArticlePanel'

const ArticlesIndex = ({ articles }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Articles</h1>
        <div className="tile is-ancestor">
          {articles.map(article => <div key={article.id} className="tile">
            <ArticlePanel {...article}/>
          </div>)}
        </div>
      </div>
    </section>
  )
}

export default ArticlesIndex
