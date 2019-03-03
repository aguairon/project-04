import React from 'react'
import { Link } from 'react-router-dom'

const ArticlePanel = ({ id, title, content}) => {
  return(
    <div className="tile is-parent">
      <Link to={`/articles/${id}`}>
        <article className="tile article is-child notification is-danger">
          <p className="title">{title}</p>
          <div className="content">
            {content}
          </div>
        </article>
      </Link>
    </div>
  )
}

export default ArticlePanel
