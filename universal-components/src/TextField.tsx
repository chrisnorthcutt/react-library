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

    > .field-label {
        position: absolute;
        margin-top: 18px;
        margin-left: 16px;
        font-family: Roboto, sans-serif;
        font-size: 16px;
        line-height: 19px;
        origin-x: 0;
    }
    > .input {
        width: 90%;
        padding: 15px 16px;
        margin-bottom: 20px;
        font-family: Roboto, sans-serif;
        font-size: 16px;
        line-height: 19px;
        border-radius: 4px;
        outline: none;
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
                style={{
                    originX: 0
                }}
                initial={{
                    scale: 1,
                    x: 0,
                    y: 0,
                    color: colors.grey400
                }}
                animate={{
                    scale: isFocused ? 0.8 : 1,
                    x: isFocused ? 1 : 0,
                    y: isFocused ? -15 : 0,
                    color: isFocused ? colors.primary400 : colors.grey400
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
                    border: '1px solid ' + colors.grey400
                }}
                animate={{
                    border: isFocused ? '2px solid ' + colors.primary400 : '1px solid ' + colors.grey400
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