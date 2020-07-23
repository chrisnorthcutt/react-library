import React from "react";
import { TextField } from "./TextField";
import { Select } from "./Select";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { ModalContainer } from "./ModalContainer";
import * as Type from "./Typography";
import { createGlobalStyle } from "styled-components";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: robotoRegular;
    src: url("/fonts/Roboto/Roboto-Black.ttf") format("ttf");
  }
  @font-face {
    font-family: robotoMedium;
    src: url("/fonts/Roboto/Roboto-Medium.ttf") format("ttf");
  }
  @font-face {
    font-family: robotoBold;
    src: url("/fonts/Roboto/Roboto-Bold.ttf") format("ttf");
  }
  @font-face {
    font-family: robotoLight;
    src: url("/fonts/Roboto/Roboto-Light.ttf") format("ttf");
  }
  * {
    font-family: robotoRegular;
  }
`;

function App() {
  return (
    <div style={{ width: 375 }}>
      <GlobalStyle />
      <h2>Components</h2>
      <h4>TextField</h4>
      <TextField label="First Name" type="text" />
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
