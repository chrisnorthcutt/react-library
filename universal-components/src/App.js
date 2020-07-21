import React from 'react';
import './TextField'
import './Select'
import { TextField } from './TextField';
import { Select } from './Select';
import { Button } from './Button';
import { Modal } from './Modal';
import * as Type from './Typography'

function App() {
  return (
    <div style={{width: 375}}>
      <h2>Components</h2>
      <h4>TextField</h4>
      <TextField label="test" />
      <Select></Select>
      <Button importance="primary" />
      {/* <h4>TextField</h4> */}
      {/* <TextField type="password" label="test"></TextField> */}
      {/* <Button /> */}
      <Modal />
      <TextField></TextField>
      <h2>Typography</h2>
      <Type.H1>Heading 1</Type.H1>
      <Type.H2>Heading 2</Type.H2>
      <Type.H3>Heading 3</Type.H3>
      <Type.H4>Heading 4</Type.H4>
      <Type.H5>Heading 5</Type.H5>
      <Type.Paragraph>Paragraph</Type.Paragraph>
      <Type.Caption>Caption</Type.Caption>
      <h2>Colors</h2>
    </div>
    
  );
}

export default App;
