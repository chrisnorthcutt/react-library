import * as React from "react"
import { useState } from "react"
import { colors, shadows } from "./Variables"
import styled from "styled-components"
import { motion, addPropertyControls, ControlType } from "framer"

interface Props {
    enabled: Boolean;
    color: String;
}

const StyledSwitch = styled(motion.div).attrs((props: Props) => {
    return {
        enabled: props.enabled,
        color: props.color
    }
})`
  width: 2.5rem;
  height: 2.5rem;
  margin: 12px 2px;
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
`

export function Switch(props: any) {
    const { enabled, on, color } = props
    const [isOn, setOn] = useState(on)

    function onTap() {
        setOn(enabled ? !isOn : isOn)
    }

    return (
        <StyledSwitch onTap={onTap} enabled={enabled} color={color}>
            <motion.div
                className="bg"
                initial={{
                    background: isOn ? color : colors.grey400,
                }}
                animate={{
                    background: isOn ? color : colors.grey400,
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
        </StyledSwitch>
    )
}

Switch.defaultProps = {
    width: 40,
    height: 40,
    enabled: true,
    on: false,
    color: colors.primary900
}

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
    },
})
