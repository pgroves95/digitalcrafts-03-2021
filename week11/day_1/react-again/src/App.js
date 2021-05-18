import Nav from './components/nav';
import Search from './components/search';
import Footer from './components/footer';
import './App.css';

//google hompage with header/nav, search bar, footer
function App() {
  return (
    <div className="App">
       <Nav />
       <Search />
       <Footer />
    </div>
  );
}

export default App;
