import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType, motion } from "framer"
import { Icon } from "./Icon"
import { colors, shadows } from "./Variables"

// Learn more: https://framer.com/

function TabButton({ title = "Title", active, accentColor, index }) {
    const color = active === index ? accentColor : colors.grey700

    return <Icon iconName={title} fill={color} />
}

export function BottomNav(props) {
    const {
        item1Icon,
        item2Icon,
        item3Icon,
        item4Icon,
        item5Icon,
        accentColor,
        children,
        showScreens,
        defaultActive,
        ...rest
    } = props
    const [active, setActive] = React.useState(defaultActive)
    const [activeX, setActiveX] = React.useState(defaultActive)
    let activeView = null
    React.Children.forEach(children, (child, index) => {
        if (index === active) {
            activeView = child
        }
    })
    let navItemsArr = []
    let items = []
    let title

    React.useEffect(() => { 
        let newActiveX = defaultActive / children.length * window.innerWidth
        setActiveX(newActiveX)
    }, [defaultActive])
    
    const navItems = React.Children.map(
        children,
        (child, index) => (
            (
                <Stack
                    direction={"vertical"}
                    distribution={"space-evenly"}
                    alignment={"center"}
                    height={56}
                    width={"1fr"}
                    onClick={(event) => {
                        setActiveX(event.currentTarget.offsetWidth * index)
                        setActive(index)
                    }}
                >
                    <TabButton
                        accentColor={accentColor}
                        index={index}
                        title={eval(`item${index + 1}Icon`)}
                        active={active}
                    />
                    <motion.span
                        initial={{
                            y: 50,
                            opacity: 0,
                            marginTop: -24,
                        }}
                        animate={{
                            opacity: index === active ? 1 : 0,
                            y: index === active ? 0 : 50,
                            marginTop: index === active ? 0 : -24,
                        }}
                        style={{
                            fontSize: 12,
                            fontWeight: index === active ? 600 : 500,
                            height: 12,
                            color:
                                index === active
                                    ? colors.primary600
                                    : colors.grey700,
                        }}
                    >
                        {child.props.name}
                    </motion.span>
                </Stack>
            )
        )
    )
    return (
        <Frame background={"transparent"} size="100%">
            {showScreens ? activeView : ""}
            <Frame bottom={0} width="100%" height={56} background={"white"}>
                <Frame
                    style={{ margin: 0 }}
                    height={2}
                    width={100 / children.length + "%"}
                    backgroundColor={accentColor}
                    opacity={1}
                    animate={{ left: activeX }}
                    left={activeX}
                />
                <Stack
                    height={56}
                    direction={"horizontal"}
                    gap={8}
                    width={"100%"}
                    distribution={"space-between"}
                    background={"transparent"}
                    shadow={shadows.z2}
                >
                    {navItems}
                </Stack>
            </Frame>
        </Frame>
    )
}

BottomNav.defaultProps = {
    item1Icon: "home",
    item2Icon: "book",
    item3Icon: "gear",
    item4Icon: "send",
    item5Icon: "sun",
    activeItem: "1",
    accentColor: colors.primary600,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(BottomNav, {
    accentColor: {
        type: ControlType.Color,
        title: "Accent Color",
        defaultValue: colors.primary600,
    },

    item1Icon: {
        type: ControlType.Enum,
        options: ["home", "book", "gear", "send", "sun"],
        optionTitles: ["Home", "Book", "Gear", "Send", "Sun"],
        defaultValue: "home",
        hidden(props) {
            return false || props.children.length <= 0
        },
    },
    item2Icon: {
        type: ControlType.Enum,
        options: ["home", "book", "gear", "send", "sun"],
        optionTitles: ["Home", "Book", "Gear", "Send", "Sun"],
        defaultValue: "book",
        hidden(props) {
            return false || props.children.length <= 1
        },
    },
    item3Icon: {
        type: ControlType.Enum,
        options: ["home", "book", "gear", "send", "sun"],
        optionTitles: ["Home", "Book", "Gear", "Send", "Sun"],
        defaultValue: "gear",
        hidden(props) {
            return false || props.children.length <= 2
        },
    },
    item4Icon: {
        type: ControlType.Enum,
        options: ["home", "book", "gear", "send", "sun"],
        optionTitles: ["Home", "Book", "Gear", "Send", "Sun"],
        defaultValue: "send",
        hidden(props) {
            return false || props.children.length <= 3
        },
    },
    item5Icon: {
        type: ControlType.Enum,
        options: ["home", "book", "gear", "send", "sun"],
        optionTitles: ["Home", "Book", "Gear", "Send", "Sun"],
        defaultValue: "sun",
        hidden(props) {
            return false || props.children.length <= 4
        },
    },
    defaultActive: {
        type: ControlType.Number,
        title: "Default Active",
        defaultValue: 0,
        min: 0,
        max: 4,
        step: 1
    },
    showScreens: {
        type: ControlType.Boolean,
        title: "Show Screens",
        defaultValue: true,
    },
    children: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
        hidden(props) {
            return !props.showScreens
        },
    },
})
