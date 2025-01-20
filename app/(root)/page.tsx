import HeaderBox from '@/components/ui/header'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { placeholderAccounts } from '@/constants/placeHolders';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = 
  {
    firstName: "Nathan", 
    lastName: "Chan",
    email: 'nathan109@gmail.com'
  };
  const user = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome, "
            user={user?.name || "Guest"}
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
        user={user}
        transactions={[]}
        banks={[
          { currentBalance: 123.40 }, 
          { currentBalance: 425.21 }
        ]}
      />
    </section>
  )
}

export default Home
