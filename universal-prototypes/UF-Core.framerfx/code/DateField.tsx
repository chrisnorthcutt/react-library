import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { colors, spacing } from "./Variables";
import styled from "styled-components";
import { motion, Frame, addPropertyControls, ControlType } from "framer";
import * as Type from "./Typography";
import { Icon } from "./Icon";

interface Props {
	enabled: Boolean;
	focused: Boolean;
}

const StyledField = styled(motion.div).attrs((props: Props) => {
	const { enabled, focused } = props;
	return {
		enabled: enabled,
		focused: focused,
	};
})`
	width: 100%;
	height: 100%;
	opacity: ${(props) => (props.enabled ? 1 : 0.5)};
	margin-bottom: 1.5rem;

	> .label {
		position: absolute;
		left: ${spacing["2x"]};
		top: ${spacing["2x"]};
		font-family: Roboto, sans-serif;
		font-size: 16px;
		line-height: 19px;
		origin-x: 0;
	}
	> .input {
		width: 100%;
		padding: 0 ${spacing["2x"]};
		height: ${spacing["6x"]};
		padding-top: 12px;
		font-size: 14px;
		border-radius: 4px;
		border-style: solid;
		outline: none;
		background: ${(props) =>
			props.enabled ? colors.white : colors.grey200};

		&:invalid {
			border-color: ${colors.danger};
		}
	}
	> .assistive {
		margin-top: 0px;
		height: ${spacing["2x"]};
		padding: 0 ${spacing["2x"]};
		padding-top: 4px;
	}
`;

export function DateField(props: any) {
	const {
		label,
		enabled,
		focused,
		empty,
		hasError,
		defaultValue = "",
		assistMessage = "",
		errorMessage = "This date isn't valid",
		color,
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

	function isValidDate(date: string) {
		return new Date(date).toString() !== "Invalid Date";
	}
	function onChange(e: any) {
		const value = e.target.value
		if (props.onChange) props.onChange(value)

        setValue(value)

        if (props.onValueChange) {
            props.onValueChange(value)
        }
		setValue(value);
		setValid(isValidDate(value));
	}
	function onFocus() {
		setFocused(true);
	}
	function onBlur() {
		setFocused(false);
	}

	if (isFocused) {
		activeColor = color;
		message = assistMessage;
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
			message = label.replace(/[^a-zA-Z ]/g, "") + " cannot be empty";
	}

	return (
		<StyledField enabled={enabled}>
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
			<motion.input
				id={"renene" + id}
				className="input"
				type="date"
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
			<Frame
				left={16}
				width={"100%"}
				height={16}
				background={"transparent"}
			>
				<Type.Caption color={activeColor}>{message}</Type.Caption>
			</Frame>
		</StyledField>
	);
}

DateField.defaultProps = {
	label: "Test",
	enabled: true,
	focused: false,
	color: colors.primary900,
	width: 375,
	height: 70,
};

addPropertyControls(DateField, {
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
	color: {
		title: "Color",
		type: ControlType.Color,
		defaultValue: colors.primary900,
	},
	defaultValue: {
		title: "Date",
		type: ControlType.String,
		defaultValue: "",
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
});
