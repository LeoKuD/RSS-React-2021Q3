import React from 'react'
import { DashboardContainer } from './components/dashboard/DashboardContainer'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        <DashboardContainer />
      </main>
      <Footer />
    </div>
  )
}
