import * as React from "react";
import { useState } from "react";
import { colors, spacing } from "./Variables";
import styled from "styled-components";
import * as Type from "./Typography";
import { motion, addPropertyControls, ControlType } from "framer";

interface Props {
    disabled: Boolean;
    color: String;
    selected: Boolean;
    activeColor: String;
}

const StyledRadio = styled(motion.div).attrs((props: Props) => {
    return {
        disabled: props.disabled,
        selected: props.selected,
        activeColor: colors.primary600,
    };
})`
    width: 100%;
    height: ${spacing["5x"]};
    display: flex;
    justify-content: start;
    align-content: flex-start;
    align-items: center;

    .container {
        width: ${spacing["3x"]};
        height: ${spacing["3x"]};
        background: ${(props) =>
            !props.disabled ? colors.white : colors.grey200};
        outline: none;
        border: 1px solid
            ${(props) =>
                props.selected && !props.disabled
                    ? props.activeColor
                    : !props.selected && !props.disabled
                    ? colors.grey700
                    : colors.grey400};
        border-radius: 50%;

        > .background {
            width: ${spacing["2x"]};
            height: ${spacing["2x"]};
            margin: 3px auto;
            background: ${(props) =>
                props.selected && !props.disabled
                    ? props.activeColor
                    : !props.selected && !props.disabled
                    ? colors.white
                    : colors.grey400};
            border-radius: 50%;
        }
    }
    > .label {
        margin: 0 ${spacing["2x"]};
        color: ${(props) => colors.grey900};
        cursor: pointer;
    }
`;

export function Radio(props: any) {
    const { disabled, label, selected } = props;
    const [isChecked, setChecked] = useState(selected);

    React.useEffect(() => {
        let newSelectedState;
        if (selected === true) {
            newSelectedState = true;
        } else if (selected === false) {
            newSelectedState = false;
        }
        setChecked(newSelectedState);
    }, [selected]);

    return (
        <StyledRadio
            onTap={() => {
                setChecked(!disabled ? !isChecked : isChecked);
            }}
            selected={isChecked}
            disabled={disabled}
        >
            <div className="container">
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
                        duration: 0.2,
                    }}
                    className="background"
                />
            </div>
            <Type.Body2 className="label" style={{ marginLeft: ".5rem" }}>
                {label}
            </Type.Body2>
        </StyledRadio>
    );
}

Radio.defaultProps = {
    width: 200,
    height: 40,
    color: colors.grey700,
    disabled: true,
    label: "Label",
};

addPropertyControls(Radio, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Label",
    },
});
