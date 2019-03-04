import React from 'react'

const MessageForm = ({ data, handleChange, handleSubmit}) => {
  return (
    <form className="messageForm" onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Add a message here"
            name="content"
            onChange={handleChange}
            value={data.content || ''}>
          </textarea>
        </div>
      </div>
      <button className="button is-primary">Save Message</button>
    </form>
  )
}

export default MessageForm
