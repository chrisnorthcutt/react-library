import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function Image(props) {
    const { uploadedFile, tint, onTap, ...rest } = props

    return (
        <Frame background={{src: uploadedFile}} />
    )
}

Image.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Image, {
    uploadedFile: {
        title: "File",
        type: ControlType.File,
        allowedFileTypes: ["jpg", "png", "gif", "jpeg"]
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})
