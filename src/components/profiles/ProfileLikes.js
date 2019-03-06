import React from 'react'
import EmptyProfileSection from './EmptyProfileSection'
import PopulatedProfileSection from './PopulatedProfileSection'

const ProfileLikes = ({liked}) => {
  if (liked.length > 0 ) {
    return (
      <PopulatedProfileSection items={liked} />
    )
  } else {
    return (
      <EmptyProfileSection message={'No articles have been liked'}/>
    )
  }
}

export default ProfileLikes
