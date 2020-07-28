import React from "react";
import { TextField } from "./TextField";
import { DateField } from "./DateField";
import { Select } from "./Select";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { ModalContainer } from "./ModalContainer";
import * as Type from "./Typography";
import { createGlobalStyle } from "styled-components";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { fontFamily } from "./variables";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${fontFamily};
  }
`;

function App() {
  return (
    <div style={{ width: 375 }}>
      <GlobalStyle />
      <h2>Components</h2>
      <h4>TextField</h4>
      <TextField label="First Name" type="text" assistMessage="Alphabetical characters only" />
      <hr />
      <h4>DateField</h4>
      <DateField label="DOB" />
      <hr />
      <Button importance="primary" display="block" />
      <Button importance="secondary" display="block" />
      <Button importance="tertiary" display="inline" />
      <Button importance="primary" display="inline" />
      <Button importance="secondary" display="inline" />
      <hr />
      <Checkbox enabled={true} />
      <hr />
      <Switch enabled={true} on={true} />
      <hr />
      <Radio enabled={true} />
      <hr />
      <h2>Typography</h2>
      <Type.H1>Heading</Type.H1>
      <Type.H2>Heading 2</Type.H2>
      <Type.H3>Heading 3</Type.H3>
      <Type.H4>Heading 4</Type.H4>
      <Type.H5>Heading 5</Type.H5>
      <Type.Body1>Paragraph</Type.Body1>
      <Type.Caption>Caption</Type.Caption>
      <h2>Colors</h2>
    </div>
  );
}

export default App;
