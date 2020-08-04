import * as React from "react"
import { addPropertyControls, ControlType, useNavigation } from "framer"
import { Button } from "./Button"
import { colors, spacing, shadows, converToREM } from "./Variables";
import styled from "styled-components";
import * as Type from "./Typography";

// Learn more: https://framer.com/api

export function Modal(props) {
    const {
        header,
        body,
        primaryAction,
        secondaryAction,
        showSecondaryAction,
        primaryActionTap,
        secondaryActionTap,
        ...rest
    } = props

    const StyledModal = styled.div`
                padding: ${spacing["2x"]}  ${spacing["3x"]};
                background: ${colors.white};
                display: flex;
                flex-direction: column;
                justify-content: left;
                width: ${converToREM(280)};
                border-radius: 4px;
                box-shadow: ${shadows.z5};
    ` 
    return (
        <StyledModal>
            <div style={{ marginBottom: 24 }}>
                <div
                    style={{
                        height: 48,
                        marginBottom: 8,
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "start",
                    }}
                >
                    <Type.H6 style={{ margin: 0 }}>{header}</Type.H6>
                </div>

                <Type.Body2 style={{ margin: 0 }}>{body}</Type.Body2>
            </div>
            <Button
                style={{ marginBottom: 8 }}
                buttonStyle={"primary"}
                text={primaryAction}
                onTap={primaryActionTap}
            />
            <Button
                style={{ display: showSecondaryAction ? "initial" : "none" }}
                buttonStyle={"tertiary"}
                text={secondaryAction}
                onTap={secondaryActionTap}
            />
        </StyledModal>
    )
}

Modal.defaultProps = {
    height: 285,
    width: 280,
    header: "Dialog Header",
    body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris dui.",
    showSecondaryAction: true,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Modal, {
    header: {
        title: "Header",
        type: ControlType.String,
        defaultValue: "Dialog Header",
    },
    body: {
        title: "Body",
        type: ControlType.String,
        defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris dui.",
    },
    primaryAction: {
        title: "Primary",
        type: ControlType.String,
        defaultValue: "Primary",
    },
    secondaryAction: {
        title: "Secondary",
        type: ControlType.String,
        defaultValue: "Secondary",
        hidden(props) {
            return !props.showSecondaryAction
        },
    },
    showSecondaryAction: {
        title: "Show Secondary Act.",
        type: ControlType.Boolean,
    },
})
