import React from 'react'

const ProfileDetails = ({ email, createdAt }) => {
  return (
    <div>
      <h1 className="title is-2">{email}</h1>
      <p>`Created at {createdAt}`</p>
    </div>
  )
}

export default ProfileDetails
