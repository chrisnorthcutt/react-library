import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    isPressed: Boolean;
}

const StyledButton = styled(motion.button).attrs((props: Props) => {
    return {
        isPressed: props.isPressed,
    }
})`
    width: ${sizes.auto};
    height: 4vh;
    padding: 0.5rem 1rem;
    background: ${colors.primary400};
    outline: none;
    border: none;
    border-radius: 0.5vh;
    font-family: 'Helvetica';
    font-weight: 800;
    font-size: 1rem;
    color: ${colors.white};
    &.big-button {
        width: ${sizes.full};
    }
`

export function Button(props: any) {
    return (
        <StyledButton 
            whileTap={{
                scale: 0.96
            }}
            className="big-button">
            Howdy
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey"
}
