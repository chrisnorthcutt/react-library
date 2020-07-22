import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import * as Type from "./Typography";
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
    width: ${sizes.fit};
    height: 2.5rem;
    background: ${props => 
        props.importance === "tertiary" ? "transparent" : colors.primary600
    };
    outline: none;
    border: none;
    border-radius: 1.5rem;
    &.big-button {
        display: block;
        width: ${sizes.fit > '300px' ? '300px' : sizes.fit};
        height: 2.5rem;
    }
    > span {
        color: ${props => props.importance === "tertiary" ? colors.primary600 : colors.white};
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
            <Type.ButtonText>{text}</Type.ButtonText>
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey"
}
