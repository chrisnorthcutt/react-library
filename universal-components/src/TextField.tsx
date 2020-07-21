import * as React from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    hasError: Boolean;
    isFocused: Boolean;
    hasContent: Boolean;
}

const StyledInput = styled("input").attrs((props: Props) => {
    return {
        isFocused: props.isFocused,
        hasContent: props.hasContent,
    };
})`
    height: ${sizes.xlg};
    padding: 0 ${sizes.med};
    padding-top: 12px;
    border: 1px solid ${colors.grey400};
    border-radius: 4px;
    box-sizing: border-box;
    display: block;
    &:focus {
        border: 1px solid ${colors.primary600};
        outline: none;
    }
`;

const Label = styled(motion.label)`
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    left: 16px;
    top: 16px;
    transform-origin: 0 0;
`;

export function TextField(props: any) {
    const [isFocused, setFocus] = React.useState(false);
    const [hasContent, setContent] = React.useState(false);

    const toggleFocus = () => {
        setFocus(!isFocused);
    };
    const checkInput = (event: any) => {
        const target = event.target;
        target.value === "" ? setContent(false) : setContent(true);

    };

    const variants = {
        focused: {
            scale: .75,
            color:  colors.primary600,
            y: -12,
        },
        blurred: {
            color: colors.grey700,
            scale: 1,
            y: 0,
            fontSize: "14px",
        },
        filled: {
            color: colors.grey700,
            scale: 0.75,
            y: -12,
        },
    };
    return (
        <div style={{ position: "relative" }}>
            <StyledInput
                onChange={(e) => checkInput(e)}
                onBlur={toggleFocus}
                onFocus={toggleFocus}
            />
            <Label
                initial={isFocused  ? "focused" : hasContent ? "filled" :  "blurred"}
                animate={isFocused  ? "focused" : hasContent ? "filled" :  "blurred"}                
                variants={variants}
            >
                {props.label}
            </Label>
        </div>
    );
}

TextField.defaultProps = {
    label: "Test",
    type: "text",
    disabled: false,
};
