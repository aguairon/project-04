import React from 'react'

const ArticleSearchBar = ({ searchValue, handleChange, handleSubmit }) => {
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="field searchbar">
        <div className="control">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleChange}
              name='search'
            />
            <span className="icon is-small is-left" >
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
    </form>
  )
}

export default ArticleSearchBar
