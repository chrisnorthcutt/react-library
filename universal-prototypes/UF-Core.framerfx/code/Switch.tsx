import * as React from "react";
import { useState } from "react";
import { colors, shadows, spacing } from "./Variables";
import styled from "styled-components";
import * as Type from "./Typography";
import { motion, addPropertyControls, ControlType } from "framer";

interface Props {
  enabled: Boolean;
  color: String;
}

const StyledSwitch = styled(motion.div).attrs((props: Props) => {
  return {
    enabled: props.enabled,
    color: props.color,
  };
})`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;

  > .label {
    color: ${colors.grey900};
  }

  .container {
    margin-left: ${spacing["2x"]};
    width: 2.5rem;
    height: 1rem;
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
  }
`;

export function Switch(props: any) {
  const { enabled, on, color, label } = props;
  const [isOn, setOn] = useState(on);

  function handleOnTap() {
    props.onValueChange(!isOn)
    setOn(enabled ? !isOn : isOn);
  }

  return (
    <StyledSwitch onTap={handleOnTap} enabled={enabled} color={color}>
      <Type.Body2 color={colors.grey900} className="label">{label}</Type.Body2>
      <div className="container">
        <motion.div
          className="bg"
          initial={{
            background: isOn ? colors.success : colors.grey400,
          }}
          animate={{
            background: isOn ? colors.success : colors.grey400,
          }}
        >
          <motion.div
            initial={{
              x: isOn ? "1rem" : 0,
            }}
            animate={{
              x: isOn ? "1rem" : 0,
            }}
            className="knob"
          />
        </motion.div>
      </div>
    </StyledSwitch>
  );
}

Switch.defaultProps = {
  width: 40,
  height: 40,
  enabled: true,
  on: false,
  color: colors.primary900,
  label: "Label",
  onValueChange: () => null
};

addPropertyControls(Switch, {
  enabled: {
    title: "Enabled",
    type: ControlType.Boolean,
    defaultValue: true,
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
    hidden(props) {
      return true;
    },
  },
  label: {
    title: "Label",
    type: ControlType.String,
  },
});
