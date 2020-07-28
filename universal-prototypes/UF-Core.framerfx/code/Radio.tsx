import * as React from "react"
import { useState } from "react"
import { colors } from "./Variables"
import styled from "styled-components"
import { motion, addPropertyControls, ControlType } from "framer"

interface Props {
    enabled: Boolean;
    color: String;
}

const StyledRadio = styled(motion.div).attrs((props: Props) => {
    return {
        enabled: props.enabled,
        color: props.color
    }
})`
  position: relative;
  margin: 8px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background: ${colors.white};
  outline: none;
  border: 1px solid ${props => props.color};
  border-radius: 50%;
  opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

  > .background {
    width: 1rem;
    height: 1rem;
    background: ${props => props.color};
    border-radius: 50%;
  }
`

export function Radio(props: any) {
    const { enabled, color } = props
    const [isChecked, setChecked] = useState(false)

    return (
        <StyledRadio
            onTap={() => {
                setChecked(enabled ? !isChecked : isChecked)
            }}
            enabled={enabled}
            color={color}
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
    )
}

Radio.defaultProps = {
    width: 40,
    height: 40,
    color: colors.primary900,
    enabled: true,
}

addPropertyControls(Radio, {
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