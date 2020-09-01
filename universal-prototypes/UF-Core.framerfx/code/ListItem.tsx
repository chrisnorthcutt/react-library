import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import * as Type from "./Typography"
import { colors, spacing, shadows } from "./Variables"
import { Icon } from "./Icon"
import { iconOptions, iconNames } from "./IconList"

// Learn more: https://framer.com/api

export function ListItem(props) {
    const { label, icon, onTap, hasIcon, iconPosition, firstInList, ...rest } = props

    return (
        <Frame {...rest} background={colors.white} width="100%"
            style={{
                borderBottom: "1px solid " + colors.grey200,
                borderTop: firstInList ? "1px solid " + colors.grey200 : null
            }}
        >
            <Stack
                {...rest}
                onTap={onTap}
                width="100%"
                paddingLeft={16}
                paddingRight={12}
                gap={16}
                alignment={"center"}
                distribution={
                    iconPosition === "Left" ? "start" : "space-between"
                }
                direction={"horizontal"}
            >
                {iconPosition === "Left" ? (
                    <Icon
                        iconName={icon}
                        style={{ display: hasIcon ? "initial" : "none" }}
                        fill={colors.primary600}
                        size={24}
                    />
                ) : null}
                <Type.Body1>{label}</Type.Body1>
                {iconPosition === "Right" ? (
                    <Icon
                        iconName={icon}
                        style={{ display: hasIcon ? "initial" : "none" }}
                        fill={colors.primary600}
                        size={24}
                    />
                ) : null}
            </Stack>
        </Frame>
    )
}

ListItem.defaultProps = {
    height: 48,
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
    iconPosition: {
        title: "Icon Position",
        type: ControlType.SegmentedEnum,
        options: ["Left", "Right"],
        defaultValue: "Left",
        hidden(props) {
            return !props.hasIcon
        },
    },
    firstInList: {
        title: "First in List",
        type: ControlType.Boolean,
        defaultValue: true
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})
