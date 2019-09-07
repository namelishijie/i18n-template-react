import React from 'react'

export default function Loading({ error, pastDelay }) {
  if( error ){
    return (
      <div>Error!</div>
    )
  }else if( pastDelay ) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }else {
    return null
  }
}