import React, {useEffect} from 'react'

const NoPage = () => {
  useEffect(() => {
    document.title = 'Error 404: No page found';
}, []); 
  return (
    <div>Eror 404: Page not found :(</div>
  )
}

export default NoPage