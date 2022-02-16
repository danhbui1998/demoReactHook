import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
    let history = useHistory()
    const handleBackHome = ()=>{
        history.push('/')
    }
  return (
    <div>
        <h4>This page is not found</h4>
        <h5>The link may be broken, or the page may have been removed</h5>
        <button onClick={handleBackHome}>Go to HomePage</button>
    </div>
  )
}

export default NotFound