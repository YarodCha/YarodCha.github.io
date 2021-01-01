import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'
import GithubCardsApp from './pages/GithubCardsApp'
import StarMatchGame from './pages/StarMatchGame'

export default function App() {
  return (
    <Router>
      <div className="container">
        <main className="home">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/GithubCardsApp">
              <GithubCardsApp />
            </Route>
            <Route path="/StarMatchGame">
              <StarMatchGame />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  )
}
