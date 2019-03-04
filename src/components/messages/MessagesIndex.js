import React from 'react'
import MessageShow from '../messages/MessageShow'

const MessageIndex = ({ messages }) => {
  return (
    <div className="tile is-parent is-vertical">
      {messages.map(message =>
        <MessageShow key={message.id} message={message}/>
      )}
    </div>
  )
}

export default MessageIndex
