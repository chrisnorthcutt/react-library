import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    size: String;
    text: String;
    importance: String;
}

const StyledButton = styled(motion.button).attrs((props: Props) => {
    const { size, text, importance } = props;
    return {
        size: size,
        text: text,
        importance: importance
    }
})`
    width: ${sizes.auto};
    height: 4vh;
    padding: 10px 16px;
    background: ${props => 
        props.importance === "tertiary" ? "transparent" : colors.primary400
    };
    outline: none;
    border: none;
    border-radius: 0.5vh;
    font-family: 'Helvetica';
    font-weight: 800;
    font-size: 1rem;
    color: ${props => props.importance === "tertiary" ? colors.primary400 : colors.white};
    &.big-button {
        display: block;
        width: ${sizes.fit > '300px' ? '300px' : sizes.fit};
        height: 3rem;
    }
`

export function Button(props: any) {
    const { size, text, importance } = props;
    return (
        <StyledButton
            whileTap={{
                scale: 0.98
            }}
            importance={importance}
            className={size === "big" ? "big-button" : ""}>
            {text}
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey"
}
