import React from 'react'
import ArticlePanel from '../articles/ArticlePanel'

const ProfileCreatedArticles = ({createdArticles}) => {
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
}

export default ProfileCreatedArticles
