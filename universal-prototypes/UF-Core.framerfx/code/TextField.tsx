import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { colors, spacing } from "./Variables";
import styled from "styled-components";
import { motion, addPropertyControls, ControlType, Frame } from "framer";
import * as Type from "./Typography";
import { Icon } from "./Icon";

interface Props {
    enabled: Boolean;
    focused: Boolean;
    type: String;
}

const StyledField = styled(motion.div).attrs((props: Props) => {
    const { enabled, focused, type } = props;
    return {
        enabled: enabled,
        type: type,
        focused: focused,
    };
})`
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.enabled ? 1 : 0.5)};
    margin-bottom: 1.5rem;

    > .input {
        width: 100%;
        padding: 0 ${spacing["2x"]};
        height: ${spacing["6x"]};
        padding-top: 12px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid ${colors.grey400};
        outline: none;
        background: ${(props) =>
            props.enabled ? colors.white : colors.grey200};

        &:focus {
            border-color: ${colors.primary600};
        }

        &:invalid {
            border-color: ${colors.danger}
        }
    }
    > .label {
        position: absolute;
        left: ${spacing["2x"]};
        top: ${spacing["2x"]};
        font-family: Roboto, sans-serif;
        font-size: 16px;
        line-height: 19px;
    }
    > .input:focus:invalid + .label, > .input:focus:invalid ~ .assistive {
        color: ${colors.danger};
    }
    > .input:focus + .label, > .input:focus ~ .assistive {
        color: ${colors.primary600};
    }
    > .assistive {
        margin-top: 0px;
        height: ${spacing["2x"]};
        padding: 0 ${spacing["2x"]};
        padding-top: 4px;
    }
`;

export function TextField(props: any) {
    //********** Set Props **********//

    const {
        label,
        enabled,
        focused,
        type,
        empty,
        hasError,
        defaultValue = "",
        assistMessage = "Password must contain at least one letter, at least one number, and be longer than six charaters.",
        errorMessage = "You have included non-alphabetical characters",
        color,
        ...rest
    } = props;

    //********** Set Variables **********//

    let showIcon = false;
    let activeColor, message;
    const inputRef = useRef();
    const id = Math.floor(Math.random() * 8888);

    //********** Set States **********//

    const [isFocused, setFocused] = useState(focused);
    const [value, setValue] = useState(defaultValue);
    const [isValid, setValid] = useState(hasError);
    const [showPassword, setShowPassword] = useState(false);

    //********** Validation Checks **********//

    // Check if email is valid
    function emailIsValid(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Check if password is valid
    function passwordIsValid(password: string) {
        return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(
            password
        );
    }

    //********** Input Events **********//

    function onChange(e: any) {
        const value = e.target.value;
        if (props.onChange) props.onChange(value);

        setValue(value);

        if (props.onValueChange) {
            props.onValueChange(value);
        }
        setValue(value);
        if (type === "email") {
            setValid(emailIsValid(value));
        } else if (type === "password") setValid(passwordIsValid(value));
    }

    function toggleFocus() {
        setFocused(!isFocused);
    }

    function togglePassword() {
        setShowPassword(!showPassword);
        //@ts-ignore
        inputRef.current.focus();
    }

    useEffect(() => {
        if (emailIsValid(defaultValue)) {
            setValid(true);
            if (value != defaultValue || defaultValue != "") {
                setValue(defaultValue);
            }
        }
    }, [defaultValue]);

    //********** Check Input State **********//

    if (isFocused) {
        activeColor = color;
    } else if ((!isValid && value.length > 0 && !isFocused) || hasError) {
        if (errorMessage === "") {
            activeColor = colors.grey400;
            message = assistMessage;
        } else {
            activeColor = colors.danger;
            message = errorMessage;
            showIcon = !showIcon;
        }
    } else if ((!isFocused && !empty) || defaultValue != "") {
        activeColor = colors.grey400;
        message = assistMessage;
    } else if (empty && !isFocused) {
        showIcon = !showIcon;
        activeColor = colors.danger;
        message = label + " cannot be empty";
    }

    return (
        <StyledField enabled={enabled}>
            <input
                id={"renene" + id}
                ref={inputRef}
                className="input"
                type={showPassword ? "text" : type}
                disabled={!enabled}
                defaultValue={defaultValue}
                onChange={onChange}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
                onInvalid={() => setValid(false)}
                style={{borderColor: activeColor}}
            />
            <motion.label
                className="label"
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
                    scale:
                        isFocused || value.length > 0 || defaultValue.length > 0
                            ? 0.65
                            : 1,
                    x:
                        isFocused || value.length > 0 || defaultValue.length > 0
                            ? 1
                            : 0,
                    y:
                        isFocused || value.length > 0 || defaultValue.length > 0
                            ? -15
                            : 0,
                    color: activeColor,
                }}
                transition={{
                    duration: 0.15,
                }}
            >
                {label}
            </motion.label>
            <Icon
                iconName={"warning"}
                fill={colors.danger}
                style={{
                    position: "absolute",
                    right: "12px",
                    top: "12px",
                    display: showIcon ? "initial" : "none",
                }}
            />
            <Icon
                onTap={togglePassword}
                style={{
                    position: "absolute",
                    right: "12px",
                    top: "12px",
                    display:
                        type === "password" && !showIcon ? "initial" : "none",
                }}
                iconName={!showPassword ? "show" : "hide"}
                fill={colors.grey700}
                size={"24px"}
            />
            <Frame
                style={{ paddingLeft: 16 }}
                width={"100%"}
                height={32}
                background={"transparent"}
            >
                <Type.Caption color={activeColor}>{message}</Type.Caption>
            </Frame>
        </StyledField>
    );
}

TextField.defaultProps = {
    label: "Test",
    type: "text",
    enabled: true,
    focused: false,
    color: colors.primary900,
    width: 375,
    height: 70,
    hasError: false,
};

addPropertyControls(TextField, {
    defaultValue: {
        title: "Default Value",
        type: ControlType.String,
        defaultValue: "",
    },
    currentValue: {
        title: "Current Value",
        type: ControlType.String,
        defaultValue: "",
        hidden() {
            return true;
        },
    },
    type: {
        title: "Input Type",
        type: ControlType.Enum,
        options: ["text", "email", "password", "number"],
        optionTitles: ["Text", "Email", "Password", "Number"],
    },
    label: {
        title: "Label",
        type: ControlType.String,
    },
    assistMessage: {
        title: "Assist Msg",
        type: ControlType.String,
    },
    errorMessage: {
        title: "Error Msg",
        type: ControlType.String,
    },
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
    hasError: {
        title: "Error",
        type: ControlType.Boolean,
        defaultValue: false,
        // hidden() {
        //     return true;
        // },
    },
    empty: {
        title: "Empty",
        type: ControlType.Boolean,
        defaultValue: false,
        hidden() {
            return true;
        },
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.primary900,
        hidden(props) {
            return true;
        },
    },
});
