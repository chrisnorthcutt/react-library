import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { colors, spacing, shadows } from "./Variables"
import * as Text from "./Typography"
import { Icon } from "./Icon"
import { iconNames, iconOptions } from "./IconList"
import { StatusBar } from "./StatusBar"

// Learn more: https://framer.com/api

export function NavBar(props) {
    const {
        navTitle,
        iconLeft,
        iconLeftNav,
        iconRightNav1,
        iconRightNav2,
        iconRight1,
        iconRight2,
        hasStatus,
        ...rest
    } = props

    return (
        <Frame background={colors.white} {...rest} shadow={shadows.z2i}>
            <StatusBar style={{ opacity: hasStatus ? 1 : 0 }} />
            <Stack
                direction={"horizontal"}
                padding={16}
                distribution={"space-between"}
                background={colors.white}
                height={56}
                bottom={0}
                width={"100%"}
            >
                <Icon
                    fill={colors.primary600}
                    onTap={iconLeftNav}
                    iconName={iconLeft}
                />
                <Text.PageTitle
                    style={{ marginLeft: 48, color: colors.grey900 }}
                >
                    {navTitle}
                </Text.PageTitle>
                <Stack direction={"horizontal"} gap={24} width={72}>
                    <Icon
                        onTap={iconRightNav1}
                        fill={colors.primary600}
                        iconName={iconRight1}
                    />
                    <Icon
                        onTap={iconRightNav2}
                        fill={colors.primary600}
                        iconName={iconRight2}
                    />
                </Stack>
            </Stack>
        </Frame>
    )
}

NavBar.defaultProps = {
    height: 80,
    width: 375,
    iconLeft: "arrow-left",
    iconRight1: "blank",
    iconRight2: "info",
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
    iconRightNav1: {
        type: ControlType.EventHandler,
    },
    iconRightNav2: {
        type: ControlType.EventHandler,
    },
    iconRight1: {
        title: "Right Icon 1",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconOptions,
    },
    iconRight2: {
        title: "Right Icon 2",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconOptions,
    },
    hasStatus: {
        title: "Status Bar",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
