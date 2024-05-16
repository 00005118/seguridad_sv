import React from 'react'
import './LandingTitle.css'

const LandingTitle = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default LandingTitle