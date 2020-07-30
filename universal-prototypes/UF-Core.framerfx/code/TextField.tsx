import * as React from "react";
import { useState, useRef } from "react";
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

export function TextField(props: any) {
	const {
		label,
		enabled,
		focused,
		type,
		defaultValue = "",
		assistMessage = "Password must contain at least one letter, at least one number, and be longer than six charaters.",
		errorMessage = "You have included non-alphabetical characters",
		color,
		...rest
	} = props;
	const [isFocused, setFocused] = useState(focused);
	const [value, setValue] = useState(defaultValue);
	const [isValid, setValid] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const inputRef = useRef();

	const id = Math.floor(Math.random() * 8888);
	let showIcon = false;
	let activeColor, message;

	function onChange(e: any) {
		const value = e.target.value
		if (props.onChange) props.onChange(value)

        setValue(value)

        if (props.onValueChange) {
            props.onValueChange(value)
        }
		setValue(value);
		if (type === "email") setValid(emailIsValid(value));
		else if (type === "text") setValid(textIsValid(value));
		else if (type === "password") setValid(passwordIsValid(value));
	}
	function onFocus() {
		setFocused(true);
	}
	function onBlur() {
		setFocused(false);
	}
	function emailIsValid(email: string) {
		return /\S+@\S+\.\S+/.test(email);
	}
	function textIsValid(text: string) {
		return /^[a-zA-Z-. ]*$/.test(text);
	}
	function passwordIsValid(password: string) {
		return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(
			password
		);
	}

	if (isFocused) {
		activeColor = color;
		message = assistMessage;
	} else if (!isValid && value.length > 0 && !isFocused) {
		activeColor = colors.danger;
		message = errorMessage;
		showIcon = !showIcon;
	} else if (!isFocused) {
		activeColor = colors.grey400;
		message = assistMessage;
	}

	const togglePassword = () => {
		setShowPassword(!showPassword);
		//@ts-ignore
		inputRef.current.focus();
	};

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

			<motion.input
				id={"renene" + id}
				ref={inputRef}
				className="input"
				type={showPassword ? "text" : type}
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
			<Icon
                onTap={togglePassword}
				style={{
					position: "absolute",
					right: "12px",
					top: "12px",
					display: type === "password" ? "initial" : "none",
				}}
				name={!showPassword ? "show" : "hide"}
				fill={colors.grey700}
				size={"24px"}
			/>
			<Frame
				left={16}
				width={"100%"}
				height={16}
				background={"transparent"}
			>
				<Type.Caption>{message}</Type.Caption>
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
};

addPropertyControls(TextField, {
	defaultValue: {
		title: "Default Value",
		type: ControlType.String,
		defaultValue: "",
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
		hidden(props) {
			return props.type === "password"
		}
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
	color: {
		title: "Color",
		type: ControlType.Color,
		defaultValue: colors.primary900,
		hidden(props) {
			return true;
		},
	},
});
