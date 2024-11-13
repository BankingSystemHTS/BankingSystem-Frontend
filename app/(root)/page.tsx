import HeaderBox from '@/components/ui/header'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn =
  {
    firstName: "Nathan", 
    lastName: "Chan",
    email: 'nathan109@gmail.com'


  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome, "
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & Manage your account 
            and trasactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12}
          />
        </header>
        Recent Transations
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  )
}

export default Home
