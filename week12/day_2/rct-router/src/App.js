import './App.css';
import AboutMe from './components/AboutMe'
import Blog from './components/Blog'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/aboutme'>About Me</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
      </div>
      <Switch>
        <Route path='/aboutme'>
          <AboutMe />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
