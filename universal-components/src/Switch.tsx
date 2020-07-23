import * as React from "react";
import { useState } from "react";
import { colors, shadows } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  enabled: Boolean;
}

const StyledSwitch = styled(motion.div).attrs((props: Props) => {
  return {
    enabled: props.enabled,
  };
})`
  width: 2.5rem;
  height: 2.5rem;
  opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

  .bg {
    width: 2.25rem;
    height: 1rem;
    border-radius: 1rem;

    .knob {
      position: relative;
      top: -2px;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background: ${colors.white};
      box-shadow: ${shadows.z1};
    }
  }
`;

export function Switch(props: any) {
  const { enabled, on } = props;
  const [isOn, setOn] = useState(on);

  function onTap() {
    setOn(enabled ? !isOn : isOn);
  }

  return (
    <StyledSwitch onTap={onTap} enabled={enabled}>
      <motion.div
        className="bg"
        initial={{
          background: isOn ? colors.primary600 : colors.grey400,
        }}
        animate={{
          background: isOn ? colors.primary600 : colors.grey400,
        }}
      >
        <motion.div
          initial={{
            x: isOn ? '1rem' : 0,
          }}
          animate={{
            x: isOn ? '1rem' : 0,
          }}
          className="knob"
        />
      </motion.div>
    </StyledSwitch>
  );
}
