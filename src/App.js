import logo from './logo.svg';
import './App.css';
import Prac from './Prac';
import State from './State';
import Postdata from './Postdata';
import Getdata from './Getdata';
import Count from './Count';
import Hook from './Hook';
import H from './H';
import Child from './Child';
import Neew from './Neew';
import Parent from './Parent'; 
import { createContext } from 'react';
const nm=createContext()
const ct=createContext()
function App() {
  const kl="kl"
  const lsg="lsg"
  return (
    <div className="App">
      {/*<nm.Provider value={kl}>
        <ct.Provider value={lsg}>
          <H/>
        </ct.Provider>
      </nm.Provider>*/}
      <Hook/>
      <Child/>
      <Parent/>
      <Neew/>
      {/*<Prac name="virat"/>
      <State/>
      <Count/>*/}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <Postdata/>
      <Getdata/>
    </div>
  );
}

export default App;
export {nm,ct}