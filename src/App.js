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

export default function App() {
  return (
    <Router>
      <main className="container">
        <div className="home">
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </main>
    </Router>
  )
}
