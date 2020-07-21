import * as React from "react"
import { Frame, addPropertyControls, ControlType, Scroll } from "framer"
//@ts-ignore
import { List as _List } from "ufcore/List"

// Learn more: https://framer.com/api

export function List(props) {
    const { listItems, hasArrow, ...rest } = props

    return (
        <Scroll {...rest}>
            <_List options={listItems} icon={hasArrow} />
        </Scroll>
    )
}

List.defaultProps = {
    height: 300,
    width: 375,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(List, {
    listItems: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
    },

    hasArrow: {
        type: ControlType.Boolean,
        title: "Navigation Arrow"
    },
})
