import React from 'react'
import ArticlePanel from '../articles/ArticlePanel'

const PopulatedProfileSection = ({items}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor is-vertical">
          {items.map(item => <div key={item.id} className="tile">
            <ArticlePanel {...item}/>
          </div>)}
        </div>
      </div>
    </section>
  )
}

export default PopulatedProfileSection
