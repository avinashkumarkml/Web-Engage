import React from 'react'

const ThankYou = () => {
  let user=JSON.parse(localStorage.getItem('data') || [])
  return (
    <div>
      Thanks a ton for taking out your precious time and for completing the survey
Email Address 
<h1>{user.email}</h1>
<h1>{user.mobile}</h1>
    </div>
  )
}

export default ThankYou