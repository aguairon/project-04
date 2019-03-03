import React from 'react'

const MessageShow = ({message}) => {
  return(
    <article
      className="tile message is-child notification is-danger">
      <div className="content">
        <p>{message.content}</p>
        <p>{message.sender.username} <span>{message.updated_at}</span></p>
      </div>
    </article>
  )
}

export default MessageShow
