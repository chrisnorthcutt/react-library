import * as React from "react";
import { useState } from "react";
import { colors } from "./Variables";
import styled from "styled-components";
import { motion, addPropertyControls, ControlType } from "framer";
import * as Type from "./Typography";

interface Props {
  enabled: Boolean;
  focused: Boolean;
}

const StyledField = styled(motion.div).attrs((props: Props) => {
  const { enabled, focused } = props;
  return {
    enabled: enabled,
    focused: focused,
  };
})`
  width: 100%;
  height: 100%;
  opacity: ${props => props.enabled ? 1 : 0.5};
  margin-bottom: 1.5rem;

  > .field-label {
    position: absolute;
    margin-top: 18px;
    margin-left: 16px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 19px;
    origin-x: 0;
  }
  > .input {
    width: 100%;
    padding: 15px 16px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 19px;
    border-radius: 4px;
    border-style: solid;
    outline: none;
    background: ${props => props.enabled ? colors.white : colors.grey200 };

    &:invalid {
      border-color: "red";
    }
  }
  > .assist {
    margin-top: 0px;
    height: 16px;
    padding: 0 16px;
  }
`;

export function DateField(props: any) {
    const {
        label,
        enabled,
        focused,
        defaultValue,
        assistMessage = "",
        errorMessage = "This date isn't valid",
        color
    } = props;
  const [isFocused, setFocused] = useState(focused);
  const [value, setValue] = useState(defaultValue);
  const [isValid, setValid] = useState(false);
  const id = Math.floor(Math.random() * 8888);

  function isValidDate(date: string) {
    return new Date(date).toString() !== 'Invalid Date';
  }
  function onChange(e: any) {
    setValue(e.target.value);
    setValid(isValidDate(e.target.value))
  }
  function onFocus() {
    setFocused(true);
  }
  function onBlur() {
    setFocused(false);
  }

  let activeColor;
  let message;
  if (isFocused) {
    activeColor = color;
    message = assistMessage;
  } else if (!isValid && value.length > 0) {
    activeColor = colors.danger;
    message = errorMessage;
  } else {
    activeColor = colors.grey400;
    message = assistMessage;
  }

  return (
    <StyledField enabled={enabled}>
      <motion.label
        className="field-label"
        htmlFor={"renene" + id}
        style={{
          originX: 0,
        }}
        initial={{
          scale: 1,
          x: 0,
          y: 0,
          color: activeColor,
        }}
        animate={{
          scale: isFocused || value.length > 0 ? 0.65 : 1,
          x: isFocused || value.length > 0 ? 1 : 0,
          y: isFocused || value.length > 0 ? -15 : 0,
          color: activeColor,
        }}
        transition={{
          duration: 0.15,
        }}
      >
        {label}
      </motion.label>
      <motion.input
        id={"renene" + id}
        className="input"
        type="date"
        disabled={!enabled}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        initial={{
          borderWidth: 1,
          borderColor: activeColor,
        }}
        animate={{
          borderWidth: isFocused || (!isValid && value.length > 0) ? 1 : 1,
          borderColor: activeColor,
        }}
        transition={{
          duration: 0.15,
        }}
      />
      <Type.Caption className="assist">
        {message}
      </Type.Caption>
    </StyledField>
  );
}

DateField.defaultProps = {
    label: "Test",
    enabled: true,
    focused: false,
    color: colors.primary900,
    width: 375,
    height: 70,
};

addPropertyControls(DateField, {
    enabled: {
        title: "Enabled",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    focused: {
        title: "Focused",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    on: {
        title: "On",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.primary900,
    },
    type: {
        title: "Input Type",
        type: ControlType.Enum,
        options: ["text", "email", "password", "number"],
    },
    defaultValue: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "",
    },
    assistMessage: {
        title: "Assist Msg",
        type: ControlType.String,
    },
    errorMessage: {
        title: "Error Msg",
        type: ControlType.String,
    },
})