import React from 'react'

const MessageIndex = ({messages}) => {
  return (
    <div>
      {messages.map(message =>
        <article
          key={message.id}
          className="tile message is-child notification is-danger">
          <div className="content">
            <p>{message.content}</p>
            <p>{message.sender.username} <span>{message.updated_at}</span></p>
          </div>
        </article>
      )}
    </div>
  )
}

export default MessageIndex
