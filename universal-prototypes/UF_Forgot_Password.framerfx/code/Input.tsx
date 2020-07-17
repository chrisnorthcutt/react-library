import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { TextField } from "ufcore/TextField"

// Learn more: https://framer.com/api

export function Input(props: any) {
    const { label, tint, onTap, ...rest } = props

    return <TextField label={label} />
}

Input.defaultProps = TextField.defaultProps

// Learn more: https://framer.com/api/property-controls/r
addPropertyControls(Input, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
})
