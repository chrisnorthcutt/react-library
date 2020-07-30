import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Button } from "./Button"
import { colors, spacing, converToREM } from "./Variables";
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
                box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 3px 5px -1px rgba(0,0,0,0.2);
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
            />
            <Button
                style={{ display: showSecondaryAction ? "initial" : "none" }}
                buttonStyle={"tertiary"}
                text={secondaryAction}
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
    tint: "#0099ff",
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
