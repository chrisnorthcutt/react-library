import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import * as Type from "./Typography"
import { colors, spacing, shadows } from "./Variables"
import { Icon } from "./Icon"
import { iconOptions, iconNames } from "./IconList"

// Learn more: https://framer.com/api

export function ListItem(props) {
    const { label, icon, onTap, hasIcon, ...rest } = props

    return (
        <Frame {...rest} background={colors.white}>
            <Stack
                {...rest}
                onTap={onTap}
                paddingLeft={16}
                gap={16}
                alignment={"center"}
                direction={"horizontal"}
            >
                <Icon
                    iconName={icon}
                    style={{ display: hasIcon ? "initial" : "none" }}
                    fill={colors.primary600}
                    size={24}
                />
                <Type.Body1>{label}</Type.Body1>
            </Stack>
            <Frame
                bottom={0}
                background={colors.grey400}
                height={1}
                width={"100%"}
            />
        </Frame>
    )
}

ListItem.defaultProps = {
    height: 48,
    width: 375,
    label: "List Item",
    hasIcon: true,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(ListItem, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    hasIcon: {
        title: "Show Icon",
        type: ControlType.Boolean,
    },
    icon: {
        title: "Icon",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconOptions,
        hidden(props) {
            return !props.hasIcon
        },
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})
