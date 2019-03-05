import React from 'react'
import ArticlePanel from '../articles/ArticlePanel'

const ProfileCreatedArticles = ({createdArticles}) => {
  if (createdArticles > 0) {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor is-vertical">
            {createdArticles.map(article => <div key={article.id} className="tile">
              <ArticlePanel {...article}/>
            </div>)}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="section">
        <div className="container">
          <p>No articles have been written</p>
        </div>
      </section>
    )
  }

}

export default ProfileCreatedArticles
