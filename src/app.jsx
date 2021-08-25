import React from 'react'
import { DashboardContainer } from './components/dashboard/DashboardContainer'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { About } from './components/about/About'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Error404 } from './components/404/Error404'
import { Details } from './components/datails/Details'

export const App = () => {
  const location = useLocation()
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames="page"
            key={location.key}
            unmountOnExit
          >
            <Switch location={location}>
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/about" component={About} />
              <Route path="/details/:photoId?" component={Details} />
              <Route component={Error404}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  )
}
