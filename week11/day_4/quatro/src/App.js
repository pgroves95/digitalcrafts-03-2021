import React, {useState} from 'react';
import './App.css';
import UserDetail from './components/UserDetail'
import FunctionBased from './components/FunctionBased'


function App() {

  const userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  const [input, setInput] = useState(userInfo)
  const [newData, setNewData] = useState(userInfo)

  const sendDataReset = (input) => {
    setNewData(input)
  }
  return (
    <div className="App">
    <FunctionBased input={input} setInput={setInput} userInfo={userInfo} sendDataReset={sendDataReset}/> 
    <UserDetail newData={newData}/>
    </div>
  );
}

export default App;
