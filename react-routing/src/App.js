import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Generic from './components/Generic';


function App() {
  return (
    <div className="App">
      <Router>
        <Generic path="/home" />
      </Router>
    </div>
  );
}

export default App;
