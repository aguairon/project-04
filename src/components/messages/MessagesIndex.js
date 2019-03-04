import React from 'react'
import MessageShow from '../messages/MessageShow'

const MessageIndex = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map(message =>
        <MessageShow key={message.id} message={message}/>
      )}
    </div>
  )
}

export default MessageIndex
