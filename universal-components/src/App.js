import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';
import { Button } from './Button';

function App() {
  return (
    <div>
      <h2>Components</h2>
      <h4>TextField</h4>
      <TextField type="password" label="test"></TextField>
      <Button />
    </div>
    
  );
}

export default App;
