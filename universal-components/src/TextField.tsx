import * as React from "react";
import {useState} from "react";
import { colors, sizes, fonts } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    disabled: Boolean;
    type: String;
    focused: Boolean;
}

const StyledField = styled(motion.div).attrs((props: Props) => {
    const { disabled, type, focused } = props;
    return {
        disabled: disabled,
        type: type,
        focused: focused
    }
})`
    width: 300px;
    height: 70px;

    > .input {
        width: calc(90%);
        height: 30px;
        padding: 10px 15px;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 19px;
        font-family: ${fonts.robotoRegular};
        border-radius: 5px;
        outline: none;
    }

    > .field-label {
        position: absolute;
        margin-top: 14px;
        margin-left: 15px;
        font-size: 16px;
        line-height: 19px;
        font-family: ${fonts.robotoRegular};
    }
`

export function TextField(props: any) {
    const { label, disabled, type, defaultValue } = props;
    const [isFocused, setFocused] = useState(false)
    const [value, setValue] = useState("")
    const id = Math.floor(Math.random() * 8888)
    
    function onChange(e: any) {
        setValue(e.target.value)
    }
    function onFocus() {
        setFocused(true)
    }
    function onBlur() {
        setFocused(value === "" ? false : true)
    }

    return (
        <StyledField>
            <motion.label
                className="field-label"
                htmlFor={"renene" + id}
                initial={{
                    scale: 1,
                    x: 0,
                    y: 0,
                    color: colors.grey700
                }}
                animate={{
                    scale: isFocused ? 0.75 : 1,
                    x: isFocused ? -5 : 0,
                    y: isFocused ? -15 : 0,
                    color: isFocused ? colors.primary400 : colors.grey700
                }}
                transition={{
                    duration: 0.15,
                }}
            >
                {label}
            </motion.label>
            <motion.input
                id={"renene" + id}
                className="input"
                type={type}
                disabled={disabled}
                defaultValue={defaultValue}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                initial={{
                    border: '1px solid ' + colors.grey700
                }}
                animate={{
                    border: isFocused ? '2px solid ' + colors.primary400 : '1px solid ' + colors.grey700
                }}
                transition={{
                    duration: 0.15
                }}
            />
        </StyledField>
    )
}

TextField.defaultProps = {
    label: "Test",
    type: "text",
    disabled: false,
}