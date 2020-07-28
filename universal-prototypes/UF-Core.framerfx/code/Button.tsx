import * as React from "react";
import { colors, sizes, shadows, textStyles } from "./Variables";
import styled from "styled-components";
import { motion, addPropertyControls, ControlType } from "framer";

interface Props {
    text: String;
    importance: String;
    display: String;
    color: String;
}

const StyledButton = styled(motion.button).attrs((props: Props) => {
    const { text, importance, display, color } = props;
    return {
        text: text,
        importance: importance,
        display: display,
        color: color
    }
})`
    width: ${sizes.auto};
    height: 2.5rem;
    padding: 0.625rem 1rem;
    background: ${props => 
        props.importance === "tertiary" || props.importance === "secondary" ? "transparent" : props.color
    };
    outline: none;
    border: ${props => 
        props.importance === "secondary" ? "1px solid " + props.color : "transparent"
    };
    border-radius: 1.5rem;
    &.big-button {
        display: block;
        width: ${sizes.fit > '300px' ? '300px' : sizes.fit};
        height: 2.5rem;
    }
    > span {
        font-size: ${textStyles.button.fontSize};
        font-weight: ${textStyles.button.fontWeight};
        letter-spacing: ${textStyles.button.letterSpacing};
        line-height: ${textStyles.button.lineHeight};
        text-transform: ${textStyles.button.textTransform};
        color: ${props => props.importance === "tertiary" || props.importance === "secondary" ? colors.primary600 : colors.white};
    }
`

export function Button(props: any) {
    const { text, importance, display, color } = props;
    return (
        <StyledButton
            whileTap={{
                scale: 0.98,
                boxShadow: 'none'
            }}
            whileHover={{
                boxShadow: importance !== "tertiary" ? shadows.z1 : 'none'
            }}
            style={{
                boxShadow: importance === "primary" ? shadows.z1 : 'none'
            }}
            importance={importance}
            color={color}
            className={display === "block" ? "big-button" : ""}>
            <span>{text}</span>
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey",
    importance: "primary",
    display: "block",
    color: colors.primary900,
    width: 375, height: 40
}

addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
    },
    importance: {
        title: "Importance",
        type: ControlType.Enum,
        options: ["primary", "secondary", "tertiary"]
    },
    display: {
        title: "Display",
        type: ControlType.SegmentedEnum,
        options: ["block", "inline"]
    },
    color: {
        title: "Color",
        type: ControlType.Color
    }
})

