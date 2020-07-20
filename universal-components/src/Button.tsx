import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    size: String;
}

const StyledButton = styled(motion.button).attrs((props: Props) => {
    return {
        size: props.size,
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
        width: calc(${sizes.fit > '300px' ? '300px' : sizes.fit});
        height: 3rem;
    }
`

export function Button(props: any) {
    const { size } = props;
    return (
        <StyledButton
            whileTap={{
                scale: 0.96
            }}
            className={size === "big" ? "big-button" : ""}>
            Howdy
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey"
}
