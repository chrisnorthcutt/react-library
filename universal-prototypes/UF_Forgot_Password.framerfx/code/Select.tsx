import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { Select as _Select } from "ufcore/Select"

// Learn more: https://framer.com/api

export function Select(props: any) {
    const { label, selectList, uploadedFile, ...rest } = props
    return <_Select options={selectList} label={label} />
}

Select.defaultProps = _Select.defaultProps

// Learn more: https://framer.com/api/property-controls/r
addPropertyControls(Select, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    selectList: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
    },
})
