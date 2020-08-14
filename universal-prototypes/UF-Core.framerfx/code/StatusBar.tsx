import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"
import { colors, spacing, shadows } from "./Variables"
import * as Text from "./Typography"
import { Icon } from "./Icon"
import { iconNames, iconOptions } from "./IconList"

// Learn more: https://framer.com/api

export function StatusBar(props) {
    const date = new Date()
    const currentTime =
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    const { carrier, tint, battery, signal, ...rest } = props
    return (
        <Stack
            paddingLeft={16}
            paddingRight={16}
            alignment={"center"}
            distribution={"space-between"}
            direction={"horizontal"}
            background={"white"}
            {...rest}
        >
            <Stack
                alignment={"center"}
                direction={"horizontal"}
                width={"1fr"}
                height={24}
                background="transparent"
            >
                <Stack
                    paddingBottom={7}
                    direction={"horizontal"}
                    alignment={"end"}
                    width={"auto"}
                    height={24}
                    gap={2}
                >
                    <Frame
                        height={4}
                        width={2}
                        background={colors.grey900}
                    ></Frame>
                    <Frame
                        height={6}
                        width={2}
                        background={
                            signal > 1 ? colors.grey900 : colors.grey400
                        }
                    ></Frame>
                    <Frame
                        height={8}
                        width={2}
                        background={
                            signal > 2 ? colors.grey900 : colors.grey400
                        }
                    ></Frame>
                    <Frame
                        height={10}
                        width={2}
                        background={
                            signal > 3 ? colors.grey900 : colors.grey400
                        }
                    ></Frame>
                </Stack>

                <Text.Caption style={{ margin: 0 }}>{carrier}</Text.Caption>
            </Stack>

            <Stack
                alignment={"center"}
                direction={"horizontal"}
                distribution={"center"}
                width={"1fr"}
                height={24}
            >
                <Text.Caption style={{ margin: 0 }}>{currentTime}</Text.Caption>
            </Stack>

            <Stack
                direction={"horizontal"}
                distribution={"end"}
                width={"1fr"}
                height={24}
                background={"transparent"}
            >
                <Text.Caption style={{ margin: 0 }}>
                    {battery + "%"}
                </Text.Caption>
                <Frame
                    height={12}
                    width={24}
                    background={"transparent"}
                    border={`1px solid ${colors.grey700}`}
                    borderRadius={2}
                >
                    <Frame
                        top={1}
                        left={1}
                        height={8}
                        borderRadius={1}
                        width={battery - 9 + "%"}
                        background={
                            battery < 75 && battery > 50
                                ? colors.warning
                                : battery < 50
                                ? colors.danger
                                : colors.grey900
                        }
                    ></Frame>
                </Frame>
            </Stack>
        </Stack>
    )
}

StatusBar.defaultProps = {
    height: 24,
    width: 375,
    carrier: "LillyApp",
    battery: 100,
    signal: 2,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(StatusBar, {
    carrier: {
        title: "Carrier",
        type: ControlType.String,
        defaultValue: "LillApp",
    },
    battery: {
        title: "Battery",
        type: ControlType.Number,
        defaultValue: 100,
    },
    onTap: {
        type: ControlType.EventHandler,
    },
    signal: {
        title: "Signal",
        type: ControlType.Number,
        defaultValue: 4,
        max: 4,
        min: 1,
    },
})