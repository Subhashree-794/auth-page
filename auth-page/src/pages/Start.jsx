import React from 'react'
import './style_up.css';

const Start = () => {
  return (
    <div>
      <div>
            <h1>Home page</h1>
            <p>Basic login page using local localStorage in react</p>
            <div className='fl'>
            <button><a href="/signup">Sign Up</a></button>
            <button><a href="/login">Login</a></button>
            </div>
        </div>
    </div>
  )
}

export default Start
