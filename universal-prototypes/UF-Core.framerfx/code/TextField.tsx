import * as React from "react"
import { useState } from "react"
import { colors } from "./Variables"
import styled from "styled-components"
import { motion, addPropertyControls, ControlType } from "framer"
import * as Type from "./Typography"

interface Props {
    enabled: Boolean
    focused: Boolean
    type: String
}

const StyledField = styled(motion.div).attrs((props: Props) => {
    const { enabled, focused, type } = props
    return {
        enabled: enabled,
        type: type,
        focused: focused,
    }
})`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.enabled ? 1 : 0.5)};
  margin-bottom: 1.5rem;

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
    width: 100%;
    padding: 15px 16px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 19px;
    border-radius: 4px;
    border-style: solid;
    outline: none;
    background: ${(props) => (props.enabled ? colors.white : colors.grey200)};

    &:invalid {
      border-color: ${colors.danger};
    }
  }
  > p {
    margin-top: 0px;
    height: 16px;
    padding: 0 16px;
  }
`

export function TextField(props: any) {
    const {
        label,
        enabled,
        focused,
        type,
        defaultValue,
        assistMessage = "Use the force",
        errorMessage = "You have included non-alphabetical characters",
        color,
    } = props
    const [isFocused, setFocused] = useState(focused)
    const [value, setValue] = useState(defaultValue)
    const [isValid, setValid] = useState(false)
    const id = Math.floor(Math.random() * 8888)
    let activeColor, message

    function onChange(e: any) {
        setValue(e.target.value)
        if (type === "email") setValid(emailIsValid(e.target.value))
        else if (type === "text") setValid(textIsValid(e.target.value))
    }
    function onFocus() {
        setFocused(true)
    }
    function onBlur() {
        setFocused(false)
    }
    function emailIsValid(email: string) {
        return /\S+@\S+\.\S+/.test(email)
    }
    function textIsValid(text: string) {
        return /^[a-zA-Z-. ]*$/.test(text)
    }

    if (isFocused) {
        activeColor = color
        message = assistMessage
    } else if (!isValid && value.length > 0) {
        activeColor = colors.danger
        message = errorMessage
    } else {
        activeColor = colors.grey400
        message = assistMessage
    }

    return (
        <StyledField enabled={enabled}>
            <motion.label
                className="field-label"
                htmlFor={"renene" + id}
                style={{
                    originX: 0,
                }}
                initial={{
                    scale: 1,
                    x: 0,
                    y: 0,
                    color: activeColor,
                }}
                animate={{
                    scale: isFocused || value.length > 0 ? 0.65 : 1,
                    x: isFocused || value.length > 0 ? 1 : 0,
                    y: isFocused || value.length > 0 ? -15 : 0,
                    color: activeColor,
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
                disabled={!enabled}
                defaultValue={defaultValue}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                initial={{
                    borderWidth: 1,
                    borderColor: activeColor,
                }}
                animate={{
                    borderWidth:
                        isFocused || (!isValid && value.length > 0) ? 1 : 1,
                    borderColor: activeColor,
                }}
                transition={{
                    duration: 0.15,
                }}
            />
            <Type.Caption className="assist">{message}</Type.Caption>
        </StyledField>
    )
}

TextField.defaultProps = {
    label: "Test",
    type: "text",
    enabled: true,
    focused: false,
    color: colors.primary900,
    width: 375,
    height: 70,
}

addPropertyControls(TextField, {
    enabled: {
        title: "Enabled",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    focused: {
        title: "Focused",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    on: {
        title: "On",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.primary900,
    },
    type: {
        title: "Input Type",
        type: ControlType.Enum,
        options: ["text", "email", "password", "number"],
    },
    defaultValue: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "",
    },
    assistMessage: {
        title: "Assist Msg",
        type: ControlType.String,
    },
    errorMessage: {
        title: "Error Msg",
        type: ControlType.String,
    },
})
