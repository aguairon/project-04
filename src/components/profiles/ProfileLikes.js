import React from 'react'
import ArticlePanel from '../articles/ArticlePanel'


const ProfileLikes = ({liked}) => {
  if (liked.length > 0 ) {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="tile is-ancestor is-vertical">
              {liked.map(like =><div key={like.id} className="tile">
                <ArticlePanel {...like}/>
              </div>)}
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <section className="section">
        <div className="container">
          <p>No articles have been liked</p>
        </div>
      </section>
    )
  }
}

export default ProfileLikes
