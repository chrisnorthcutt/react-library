import React from 'react';
import logo from './logo.svg';
import './App.css';
import './TextField'
import { TextField } from './TextField';

function App() {
  return (
    <div>
      <h2>Components</h2>
      <h4>TextField</h4>
      <TextField type="password" label="test"></TextField>
    </div>
    
  );
}

export default App;
