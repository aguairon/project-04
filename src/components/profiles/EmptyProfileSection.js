import React from 'react'

const EmptyProfileSection = ({message}) => {
  return (
    <section className="section">
      <div className="container">
        <p className="empty">{message}</p>
      </div>
    </section>
  )
}

export default EmptyProfileSection
