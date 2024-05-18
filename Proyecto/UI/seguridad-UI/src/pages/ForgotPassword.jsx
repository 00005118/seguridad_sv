import React, { useEffect } from 'react'

const ForgotPassword = () => {

  useEffect(() => {
    document.title = 'Forgot Password';
  }, []);
  return (
    <div>ForgotPassword</div>
  )
}

export default ForgotPassword