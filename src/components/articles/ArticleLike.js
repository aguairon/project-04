import React from 'react'
import Auth from '../../lib/Auth'

const ArticleLike = ({ likedBy, handleLike, error }) => {
  return (
    <div className={likedBy.some(like =>
      Auth.isCurrentUser(like.id)) ? 'likes liked_by_user' : 'likes'}>
      <button className='button' onClick={handleLike}>
        <span className="icon is-big is-left" >
          <i className="fas fa-2x fa-thumbs-up"></i>
        </span>
      </button>
      {error === 403 && <p>You cannot like your own article.</p>}
      {likedBy.length > 0 && likedBy.some(like => Auth.isCurrentUser(like.id)) &&<p>You have liked this.</p> }
      {likedBy.length === 1 && <p>This article has been liked once.</p>}
      {likedBy.length > 1 && <p>This article has been liked {likedBy.length} times.</p>}
      {likedBy.length === 0 && <p>This article has not been liked yet.</p>}
    </div>
  )
}

export default ArticleLike
