import * as React from "react";
import { useState } from "react";
import { colors } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  enabled: Boolean;
}

const StyledCheckbox = styled(motion.div).attrs((props: Props) => {
  return {
    enabled: props.enabled,
  };
})`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  background: ${colors.white};
  outline: none;
  border: 1px solid ${colors.primary600};
  border-radius: 2px;
  opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

  > .background {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: ${colors.primary600};
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
  const { enabled } = props;
  const [isChecked, setChecked] = useState(false);

  return (
    <StyledCheckbox
      onTap={() => {
        setChecked(enabled ? !isChecked : isChecked);
      }}
      enabled={enabled}
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
