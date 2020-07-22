import * as React from "react";
import { useState } from "react";
import { colors, sizes } from "./variables";
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
  width: 40px;
  height: 40px;
  opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

  .bg {
    width: 36px;
    height: 16px;
    border-radius: 16px;

    .knob {
      position: relative;
      top: -2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);
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
            x: isOn ? 16 : 0,
          }}
          animate={{
            x: isOn ? 16 : 0,
          }}
          className="knob"
        />
      </motion.div>
    </StyledSwitch>
  );
}
