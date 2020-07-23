import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import * as Type from "./Typography";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    text: String;
    importance: String;
    display: String;
}

const StyledButton = styled(motion.button).attrs((props: Props) => {
    const { text, importance, display } = props;
    return {
        text: text,
        importance: importance,
        display: display
    }
})`
    width: ${sizes.auto};
    height: 2.5rem;
    padding: 10px 16px;
    background: ${props => 
        props.importance === "tertiary" || props.importance === "secondary" ? "transparent" : colors.primary600
    };
    outline: none;
    border: ${props => 
        props.importance === "secondary" ? "1px solid " + colors.primary600 : "transparent"
    };
    border-radius: 1.5rem;
    &.big-button {
        display: block;
        width: ${sizes.fit > '300px' ? '300px' : sizes.fit};
        height: 2.5rem;
    }
    > span {
        color: ${props => props.importance === "tertiary" || props.importance === "secondary" ? colors.primary600 : colors.white};
    }
`

export function Button(props: any) {
    const { text, importance, display } = props;
    return (
        <StyledButton
            whileTap={{
                scale: 0.98,
                boxShadow: 'none'
            }}
            whileHover={{
                boxShadow: importance !== "tertiary" ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none'
            }}
            style={{
                boxShadow: importance === "primary" ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none'
            }}
            importance={importance}
            className={display === "block" ? "big-button" : ""}>
            <Type.ButtonText>{text}</Type.ButtonText>
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey"
}
