import React, {useEffect} from 'react'
import LogInHeader from '../components/LogInHeader/LogInHeader'
import LogInForm from '../components/LogInForm/LogInForm'


const LogIn = () => {
  
  useEffect(() => {
    document.title = 'Log in';
}, []); 

  return (
    <div>
      <LogInHeader/>      
      <div className="container">
        <LogInForm/>
      </div>
    </div>
  )
}

export default LogIn