import React, {useState} from 'react'
import './App.css';
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }
  return (
    <div className="App">
      <Counter inc={increment} dec={decrement} count={count} />
    </div>
  );
}

export default App;
