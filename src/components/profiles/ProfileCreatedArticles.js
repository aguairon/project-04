import React from 'react'
import EmptyProfileSection from './EmptyProfileSection'
import PopulatedProfileSection from './PopulatedProfileSection'

const ProfileCreatedArticles = ({createdArticles}) => {
  if (createdArticles.length >= 1) {
    return (
      <PopulatedProfileSection items={createdArticles} />
    )
  } else {
    return (
      <EmptyProfileSection message={'No articles have been written'}/>
    )
  }

}

export default ProfileCreatedArticles
