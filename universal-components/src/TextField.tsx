import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
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
        font-size: 18px;
        border-radius: 5px;
        outline: none;
    }

    > .field-label {
        position: absolute;
        margin-top: 14px;
        margin-left: 15px;
        font-size: 18px;
        font-weight: normal;
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
        setFocused(value == "" ? false : true)
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

/*
const [isFocused, setFocused] = useState(false)
    let id = Math.floor(Math.random() * 8888)
    const { value, units, type, defaultValue, onChange, label } = props

    function onFocus() {
        setFocused(true)
    }

    function onBlur() {
        setFocused(props.value == "" ? false : true)
    }

    return (
        <div>
            <input
                type={type}
                style={{
                    position: "absolute",
                    fontSize: "18px",
                    padding: "13px 15px",
                    marginBottom: "20px",
                    width: "calc(90%)",
                    height: "40px",
                    left: "5%",
                    display: "block",
                    borderRadius: "5px",
                    outline: isFocused ? "none" : "none",
                    border: isFocused
                        ? "2px solid " + ColorPalette.teal
                        : "1px solid " + "#ccc",
                }}
                id={id}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <label
                htmlFor={id}
                style={{
                    color: isFocused ? ColorPalette.teal : "#ccc",
                    background: ColorPalette.white,
                    fontSize: "16px",
                    fontWeight: "normal",
                    position: "absolute",
                    top: "15px",
                    left: "calc(5% + 8px)",
                    padding: "0 8px",
                    transform: isFocused
                        ? "scale(.75) translate(-13px,-30px)"
                        : "scale(1) translate(0px,0px)",
                    transition: "150ms cubic-bezier(0.4,0,0.2,1) all",
                    WebkitTransition: "150ms cubic-bezier(0.4,0,0.2,1) all",
                }}
            >
                {label}
            </label>
            <span
                style={{
                    color: isFocused ? ColorPalette.teal : "#ccc",
                    background: ColorPalette.white,
                    fontSize: "16px",
                    fontWeight: "normal",
                    position: "absolute",
                    top: "15px",
                    right: "calc(5% + 8px)",
                    padding: "0 8px",
                }}
            >
                {units}
            </span>
        </div>

*/