import * as React from "react";
import { useState } from "react";
import { colors, spacing, converToREM } from "./Variables";
import styled from "styled-components";
import * as Type from "./Typography";
import { motion, addPropertyControls, ControlType } from "framer";

interface Props {
    disabled: Boolean;
    color: String;
    checked: Boolean;
    activeColor: String;
}

const StyledCheckbox = styled(motion.div).attrs((props: Props) => {
    return {
        checked: props.checked,
        disabled: props.disabled,
        activeColor: colors.primary600,
    };
})`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: start;
    align-content: flex-start;
    align-items: center;

    .container {
        position: relative;
        width: ${spacing["3x"]};
        height: ${spacing["3x"]};
        background: ${(props) =>
            !props.disabled ? colors.white : colors.grey200};
        outline: none;
        border: 1px solid
            ${(props) =>
                props.checked && !props.disabled
                    ? props.activeColor
                    : !props.checked && !props.disabled
                    ? colors.grey700
                    : colors.grey400};
        border-radius: 2px;

        > .background {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: ${converToREM(22)};
            height: ${converToREM(22)};
            background: ${(props) =>
                props.checked && !props.disabled
                    ? props.activeColor
                    : !props.checked && !props.disabled
                    ? colors.white
                    : colors.grey400};
        }
        > .svg-container {
            position: absolute;
            top: 0;
            left: 0;
            width: ${converToREM(22)};
            height: ${converToREM(22)};
            background: transparent;

            > svg {
                fill: transparent;

                > path {
                    fill: transparent;
                    stroke-width: 2px;
                    stroke: ${colors.white};
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
            }
        }
    }
    > .label {
        margin: 0 ${spacing["2x"]};
        color: ${(props) => props.color};
        cursor: pointer;
    }
`;

export function Checkbox(props: any) {
    const { disabled, checked, label } = props;
    const [isChecked, setChecked] = useState(checked);

    const toggleChecked = () => {
        if (disabled && isChecked) {
            return;
        } else {
            setChecked(!isChecked);
        }
    };

    React.useEffect(() => {
        let newCheckedState;
        if (checked === true) {
            newCheckedState = true;
        } else if (checked === false) {
            newCheckedState = false;
        }
        setChecked(newCheckedState);
    }, [checked]);

    return (
        <StyledCheckbox
            onTap={toggleChecked}
            checked={isChecked}
            disabled={disabled}
        >
            <div className="container">
                <motion.div
                    initial={{
                        opacity: isChecked ? 1 : 0,
                    }}
                    animate={{
                        opacity: isChecked ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="background"
                />
                <motion.div
                    initial={{
                        scale: isChecked ? 1 : 0,
                        opacity: isChecked ? 1 : 0,
                    }}
                    animate={{
                        scale: isChecked ? 1 : 0,
                        opacity: isChecked ? 1 : 0,
                    }}
                    transition={{
                        delay: 0.05,
                        duration: 0.15,
                    }}
                    className="svg-container"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={converToREM(22)}
                        height={converToREM(22)}
                        viewBox="0 -6 30 40"
                    >
                        <path d="M 5.5 17 L 11 22.5 L 22.5 6"></path>
                    </svg>
                </motion.div>
            </div>
            <Type.Body2 className="label" style={{ marginLeft: ".5rem" }}>
                {label}
            </Type.Body2>
        </StyledCheckbox>
    );
}

Checkbox.defaultProps = {
    disabled: false,
    checked: false,
    width: 200,
    height: 40,
    label: "Label",
};

addPropertyControls(Checkbox, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
    },
});
