import React from 'react';
import './App.css';
import {HelloWorld} from 'ui-comp'
import {HelloWorld2} from 'ui-comp'

function App() {
  return (
    <div className="App">
      <HelloWorld name="John"/>
      <br/>
      <HelloWorld2 name="John"/>
    </div>
  );
}

export default App;
