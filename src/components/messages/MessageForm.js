import React from 'react'

const MessageForm = ({ data, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input
            className="textarea"
            placeholder="Textarea"
            name="content"
            onChange={handleChange}
            value={data.content}
          />
        </div>
      </div>
      <button className="button is-primary">Save Message</button>
    </form>
  )
}

export default MessageForm
