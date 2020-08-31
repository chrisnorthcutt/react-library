import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function IFrame(props) {
    const { source, tint, onTap, ...rest } = props

    return (
        <iframe
            style={{
                height: 667,
                width: 375,
                background: "#f7f7f7",
                border: "none",
                outline: "none",
            }}
            src={source}
        ></iframe>
    )
}

IFrame.defaultProps = {
    height: 667,
    width: 375,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(IFrame, {
    source: {
        title: "Source",
        type: ControlType.String,
        defaultValue: "",
    },
})
