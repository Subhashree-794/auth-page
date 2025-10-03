import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const Navigate = useNavigate();
  const logout = () => {
    Navigate("/");
  }

  return (
    <div>
      <h1>hello, we at home page bud !</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
