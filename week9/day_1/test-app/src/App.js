import './App.css';
import AboutContainer from './components/AboutContainer';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav className="nav"/>
      <Sidebar className="sidebar"/>
      <AboutContainer className="aboutcontainer"/>
    </div>
  );
}

export default App;
