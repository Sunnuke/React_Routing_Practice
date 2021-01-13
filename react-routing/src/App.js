import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Generic from './components/Generic';
import OtherNumber from './components/NumberOrWord';


function App() {
  return (
    <div className="App">
      <Router>
        <Generic path="/home" />
        <OtherNumber path="/:input" />
      </Router>
    </div>
  );
}

export default App;
