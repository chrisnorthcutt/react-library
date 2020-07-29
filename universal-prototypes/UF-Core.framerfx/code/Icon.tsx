import * as React from "react"
import { Stack, addPropertyControls, ControlType, Frame } from "framer"
import { Icons, iconNames, iconOptions } from "./IconList"

// Learn more: https://framer.com/api

export function Icon(props) {
    const { name, fill, onTap, size, style, ...rest } = props
    const iconIndex = Icons.indexOf(name)
    let iconSVG

    Icons.map((icon) => {
        if (icon.name == name) {
            iconSVG = icon.svg
        }
    })
    return (
        <Frame
            height={size}
            width={size}
            style={style}
            {...rest}
            background={"transparent"}
            onTap={onTap}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={fill}
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: iconSVG }}
            ></svg>
        </Frame>
    )
}

Icon.defaultProps = {
    height: 24,
    width: 24,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Icon, {
    name: {
        title: "Icon",
        type: ControlType.Enum,
        defaultValue: "check",
        options: iconNames,
        optionTitles: iconOptions,
    },
    fill: {
        title: "Fill Color",
        type: ControlType.Color,
    },
    onTap: {
        type: ControlType.EventHandler
    }
})
