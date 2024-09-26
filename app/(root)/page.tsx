import HeaderBox from '@/components/header'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Nathan" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user= {loggedIn?.firstName || "Guest"}
            subtext="access and manage your account 
            and trasactions efficiently."
          />

          
        </header>
      </div>
    </section>
  )
}

export default Home
