import React from 'react'
import { Link } from 'react-router-dom'

const ProfilePanel = ({ id, username, email, created_articles: created }) => {
  return (
    <div className="tile is-4 is-parent">
      <Link to={`/users/${id}`}>
        <article className="tile article is-child notification is-danger">
          <p className="title">{username}</p>
          <p>{email}</p>
          <p>Wrote {created.length} {created.length === 1? 'article' : 'articles'}</p>
        </article>
      </Link>
    </div>
  )
}


export default ProfilePanel
