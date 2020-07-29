import * as React from "react";
import { useState } from "react";
import { colors, spacing } from "./Variables";
import styled from "styled-components";
import * as Type from "./Typography";
import { motion, addPropertyControls, ControlType } from "framer";

interface Props {
  enabled: Boolean;
  color: String;
}

const StyledRadio = styled(motion.div).attrs((props: Props) => {
  return {
    enabled: props.enabled,
    color: props.color,
  };
})`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  align-content: flex-start;
  align-items: center;

  .container {
    width: 1.5rem;
    height: 1.5rem;
    background: ${(props) => (props.enabled ? colors.white : colors.grey200)};
    outline: none;
    border: 1px solid ${(props) => props.color};
    border-radius: 50%;

    > .background {
      width: 1rem;
      height: 1rem;
      margin: 3px auto;
      background: ${(props) => props.color};
      border-radius: 50%;
    }
  }
  > .label {
    margin: 0 ${spacing["2x"]};
    color: ${(props) => props.color};
  }
`;

export function Radio(props: any) {
  const { enabled, color, label } = props;
  const [isChecked, setChecked] = useState(false);

  return (
    <StyledRadio
      onTap={() => {
        setChecked(enabled ? !isChecked : isChecked);
      }}
      enabled={enabled}
      color={color}
    >
      <div className="container">
        <motion.div
          initial={{
            scale: isChecked ? 1 : 0,
            opacity: isChecked ? 1 : 0,
          }}
          animate={{
            scale: isChecked ? 1 : 0,
            opacity: isChecked ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="background"
        />
      </div>
      <Type.Body2 className="label">{label}</Type.Body2>
    </StyledRadio>
  );
}

Radio.defaultProps = {
  width: 200,
  height: 40,
  color: colors.primary900,
  enabled: true,
  label: "Label",
};

addPropertyControls(Radio, {
  enabled: {
    title: "Enabled",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: colors.primary900,
    hidden(props) {
      return true;
    },
  },
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "Label",
  },
});
