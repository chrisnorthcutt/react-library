import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function Button(props) {
    const { label, tint, onTap, ...rest } = props

    const buttonStyle = {
        backgroundColor: "black",
        borderRadius: 18,
        border: "transparent",
        color: "white",
        fontSize: 14,
        fontWeight: 600,
        width: '100%',
        height: 36,
    }

    return (
       <button style={buttonStyle}>{label}</button>
    )
}

Button.defaultProps = {
    height: 36,
    width: 240,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Button, {
    label:{
        type: ControlType.String,
    }

})
