import React from 'react';
import logo from './logo.svg';
import './App.css';
import './TextField'
import './Select'
import { TextField } from './TextField';
import { Select } from './Select';
import { Button } from './Button';
import { ModalContainer } from './ModalContainer';
import { Checkbox } from './Checkbox';

function App() {
  return (
    <div style={{width: "375px", border: "1px solid black", height: "667px"}}>
      <h2>Components</h2>
      <h4>TextField</h4>
      <TextField label="test" />
      <Select></Select>
      <Button importance="primary" />
      {/* <h4>TextField</h4> */}
      {/* <TextField type="password" label="test"></TextField> */}
      {/* <Button /> */}
      {/* <ModalContainer /> */}
      <Checkbox />
    </div>
    
  );
}

export default App;
