import * as React from "react"
import { Stack, addPropertyControls, ControlType, Frame } from "framer"
import { Icons, iconNames, iconOptions } from "./IconList"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// Learn more: https://framer.com/api

export function Icon(props) {
    const { iconName, fill, onTap, size, style, ...rest } = props
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
                
            >
                    {ReactHtmlParser(Icons[Icons.findIndex(icon => icon.name === iconName)].svg)}

            </svg>
        </Frame>
    )
}

Icon.defaultProps = {
    height: 24,
    width: 24,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Icon, {
    iconName: {
        title: "Icon",
        type: ControlType.Enum,
        defaultValue: "check",
        options: iconNames.sort(),
        optionTitles: iconOptions.sort(),
    },
    fill: {
        title: "Fill Color",
        type: ControlType.Color,
    },
    onTap: {
        type: ControlType.EventHandler
    }
})
