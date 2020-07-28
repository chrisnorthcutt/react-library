import * as React from "react";
import { useState } from "react";
import { colors } from "./Variables";
import styled from "styled-components";
import { motion, addPropertyControls, ControlType } from "framer";

interface Props {
    enabled: Boolean;
    color: String;
}

const StyledCheckbox = styled(motion.div).attrs((props: Props) => {
  return {
      enabled: props.enabled,
      color: props.color
  };
})`
  position: relative;
  margin: 8px auto;
  width: 1.5rem;
  height: 1.5rem;
  background: ${props => props.enabled ? colors.white : colors.grey200};
  outline: none;
  border: 1px solid ${props => props.color};
  border-radius: 2px;
  // opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

  > .background {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: ${props => props.color};
  }
  > .svg-container {
    position: relative;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;

    > svg {
      fill: transparent;

      > path {
        fill: transparent;
        stroke-width: 2px;
        stroke: hsl(0, 0%, 100%);
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }
  }
`;

export function Checkbox(props: any) {
  const { enabled, checked, color } = props;
  const [isChecked, setChecked] = useState(checked);

  return (
    <StyledCheckbox
      onTap={() => {
        setChecked(enabled ? !isChecked : isChecked);
      }}
          enabled={enabled}
          color={color}
    >
      <motion.div
        initial={{
          opacity: isChecked ? 1 : 0,
        }}
        animate={{
          opacity: isChecked ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="background"
      />
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
          delay: 0.05,
          duration: 0.15,
        }}
        className="svg-container"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 -6 30 40"
        >
          <path d="M 5.5 17 L 11 22.5 L 22.5 6"></path>
        </svg>
      </motion.div>
    </StyledCheckbox>
  );
}

Checkbox.defaultProps = {
    enabled: true,
    checked: false,
    color: colors.primary900,
    width: 40, height: 40
}

addPropertyControls(Checkbox, {
    enabled: {
        title: "Enabled",
        type: ControlType.Boolean
    }, 
    chekced: {
        title: "Checked",
        type: ControlType.Boolean
    },
    color: {
        title: "Color",
        type: ControlType.Color
    }
})