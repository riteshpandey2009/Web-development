import React from 'react'
import withAuth from '../utils/withAuth'

function Profile({name , role}) {
  return (
    <>
    <p>name : {name}</p>
    <p>role : {role}</p>
    </>
  )
}

export const AuthProfile = withAuth(Profile)