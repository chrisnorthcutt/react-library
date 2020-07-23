import * as React from "react";
import { useState } from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  enabled: Boolean;
}

const StyledRadio = styled(motion.div).attrs((props: Props) => {
  return {
    enabled: props.enabled,
  };
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: ${colors.white};
  outline: none;
  border: 1px solid ${colors.primary600};
  border-radius: 50%;
  opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

  > .background {
    width: 16px;
    height: 16px;
    background: ${colors.primary600};
    border-radius: 50%;
  }
`;

export function Radio(props: any) {
  const { enabled } = props;
  const [isChecked, setChecked] = useState(false);

  return (
    <StyledRadio
      onTap={() => {
        setChecked(enabled ? !isChecked : isChecked);
      }}
      enabled={enabled}
    >
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
    </StyledRadio>
  );
}
