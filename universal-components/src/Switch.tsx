import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  enabled: Boolean;
}

const StyledSwitch = styled(motion.div).attrs((props: Props) => {
  const { enabled } = props;
  return {
    enabled: enabled
  }
})`
  width: 40px;
  height: 40px;

  .bg {
    width: 36px;
    height: 16px;
    border-radius: 16px;
    opacity: ${props => props.enabled ? 1 : 0.5};

    .knob {
      position: relative;
      top: -2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 
        0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px rgba(0, 0, 0, 0.14),
        0px 1px 8px rgba(0, 0, 0, 0.12);
    }
  }
`

export function Switch(props: any) {
  const { enabled } = props;
  const [isOn, setOn] = useState(false);

  function onTap() {
    setOn(enabled ? !isOn : isOn)
  }

  return (
    <StyledSwitch onTap={onTap} enabled>
      <motion.div className="bg"
        initial={{
          background: colors.grey400
        }}
        animate={{
          background: isOn ? colors.primary600 : colors.grey400
        }}
      >
        <motion.div
          initial={{
            x: 0
          }}
          animate={{
            x: isOn ? 16 : 0
          }}
          className="knob"
          />
      </motion.div>
    </StyledSwitch>
  )
}