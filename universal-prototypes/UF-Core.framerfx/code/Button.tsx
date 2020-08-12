import * as React from "react"
import { motion, addPropertyControls, ControlType, useNavigation } from "framer"
// Import Variables & Type
import { colors, spacing, shadows } from "./Variables"
import * as Text from "./Typography"
import styled from "styled-components"
import {Icon} from "./Icon"

// Set props
interface Props {
    text: String
    buttonStyle: String
    isDisabled: Boolean
}

// Create styled button component
const StyledButton = styled(motion.button).attrs((props: Props) => {
    const { text, buttonStyle, isDisabled } = props
    return {
        text: text,
        buttonStyle: buttonStyle,
        isDisabled: isDisabled,
    }
})`
    cursor: pointer;
    opacity: ${(props) => props.isDisabled ? .5 : 1};
    width: 100%;
    height: ${spacing["5x"]};
    padding: 0 ${spacing["2x"]};
    background: ${(props) =>
        props.buttonStyle === "tertiary" || props.buttonStyle === "secondary"
            ? "transparent"
            : colors.primary900};
    outline: none;
    border: ${(props) =>
        props.buttonStyle === "secondary"
            ? "1px solid " + colors.primary900
            : "transparent"};
    border-radius: 1.5rem;
    box-shadow: ${(props) => props.buttonStyle === "primary"  && !props.isDisabled  ? shadows.z1 : "none" };
    transition: all 0.25s ease-in-out;
    &:hover {
        box-shadow: ${(props) => props.buttonStyle === "primary" || props.buttonStyle === "secondary" ? shadows.z1 : "none"} ;
    }
    &:active {
        box-shadow: none;
        transform: scale(.98);
    }
,
    &.lg {
        display: block;
        width: ${"100%" > "300px" ? "300px" : "100%"};
        height: 2.5rem;
    }
`

// Export button component
export function Button(props: any) {
    const { text, buttonStyle, isDisabled, onTap, style, hasIcon, ...rest } = props
    const navigation = useNavigation()
    return (
        <StyledButton isDisabled={isDisabled} onTap={onTap} buttonStyle={buttonStyle} style={style}>
            <Text.ButtonText color={buttonStyle != "primary" && buttonStyle != "secondary"
            ? colors.primary600 : buttonStyle === "secondary" ? colors.primary900  : colors.white}>{text}</Text.ButtonText>
        </StyledButton>
    )
}

Button.defaultProps = {
    text: "Heeey",
    buttonStyle: "primary",
    width: 375,
    height: 40,
}

addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
    },
    buttonStyle: {
        title: "Style",
        type: ControlType.Enum,
        options: ["primary", "secondary", "tertiary"],
        optionTitles: ["Primary", "Secondary", "Tertiary"],
    },
    isDisabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hasIcon: {
        title: "Icon",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    onTap: {
        type: ControlType.EventHandler,
    },
    //@ts-ignore
    ...Icon.propertyControls
})
