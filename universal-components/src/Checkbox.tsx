import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCheckbox = styled(motion.div)`
  position: relative;
  width: 30px;
  height: 30px;
  background: ${colors.white};
  outline: none;
  border: 1px solid ${colors.primary400};
  border-radius: 4px;
  > .background {
    position: absolute;
    width: 30px;
    height: 30px;
    background: ${colors.primary400};
  }
  > .svg-container {
    position: relative;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: transparent;

    > svg {
      fill: transparent;

      > path {
        fill: transparent;
        stroke-width: 3px;
        stroke: hsl(0, 0%, 100%);
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }
  }
`

export function Checkbox(props: any) {
    const [isChecked, setChecked] = useState(false)
    const enabled = true

    return (
        <StyledCheckbox
            onTap={() => {
                setChecked(enabled ? !isChecked : isChecked)
            }}
        >
            <motion.div
                initial={{
                    opacity: isChecked ? 1 : 0,
                }}
                animate={{
                    opacity: isChecked ? 1 : 0,
                }}
                transition={{
                    duration: 0.05,
                }}
                className="background"
            />
            <motion.div
                initial={{
                    scale: isChecked ? 1 : 0,
                }}
                animate={{
                    scale: isChecked ? 1 : 0,
                }}
                transition={{
                    delay: 0.05,
                    duration: 0.15,
                }}
                className="svg-container"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                >
                    <path
                        d="M 5.5 17 L 11 22.5 L 22.5 6"
                    ></path>
                </svg>
            </motion.div>
        </StyledCheckbox>
    )
}
