import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { colors, spacing, shadows } from "./Variables"
import * as Text from "./Typography"
import { Icon } from "./Icon"
import { iconNames, iconOptions } from "./IconList"

// Learn more: https://framer.com/api

export function NavBar(props) {
    const {
        navTitle,
        iconLeft,
        iconLeftNav,
        iconRightNav,
        iconRight,
        ...rest
    } = props

    return (
        <Frame
            background={colors.white}
            {...rest}
            style={{ borderBottom: `1px solid ${colors.grey200}` }}
        >
            <Stack
                direction={"horizontal"}
                padding={16}
                background={colors.white}
                height={56}
                bottom={0}
                width={"100%"}
            >
                <Stack direction={"horizontal"} gap={32}>
                    {iconLeft !== "blank" ? <Icon
                        fill={colors.grey900}
                        onTap={iconLeftNav}
                        iconName={iconLeft}
                    /> : null}
                    <Text.H6 style={{ color: colors.grey900 }}>
                        {navTitle}
                    </Text.H6>
                </Stack>

                {iconRight !== "blank" ? <Icon
                    onTap={iconRightNav}
                    style={{ marginLeft: "auto" }}
                    fill={colors.grey900}
                    iconName={iconRight}
                /> : null}
            </Stack>
        </Frame>
    )
}

NavBar.defaultProps = {
    height: 80,
    width: 375,
    iconLeft: "arrow-left",
    iconRight: "info",
    navTitle: "Title",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(NavBar, {
    navTitle: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "Title",
    },
    iconLeft: {
        title: "Left Icon",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconOptions,
    },
    iconLeftNav: {
        type: ControlType.EventHandler,
    },
    iconRightNav: {
        type: ControlType.EventHandler,
    },
    iconRight: {
        title: "Right Icon",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconOptions,
    },
})
