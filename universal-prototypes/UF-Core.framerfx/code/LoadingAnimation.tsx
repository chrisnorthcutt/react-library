import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    Stack,
    useNavigation,
} from "framer"
//@ts-ignore
import { Lottie } from "@framer/framer.lottie/code/Lottie"

// Learn more: https://framer.com/api

export function LoadingAnimation(props) {
    const { text, tint, nextScreen, delay, ...rest } = props
    const navigation = useNavigation()

    return (
        <Stack
            onLoad={setTimeout(() => navigation.fade(nextScreen), delay)}
            {...rest}
            background={"rgba(255, 255, 255, .75)"}
            distribution={"center"}
            alignment={"center"}
            direction={"vertical"}
        >
            <Frame height={100} background={"transparent"}>
                <Lottie
                    lottieJsonURL={
                        "https://assets2.lottiefiles.com/datafiles/R3ENr7LCBV5JshA/data.json"
                    }
                />
            </Frame>
            <Frame
                style={{ fontWeight: 600, fontSize: 20 }}
                background={"transparent"}
                width={"100%"}
                height={24}
            >
                {text}
            </Frame>
        </Stack>
    )
}

LoadingAnimation.defaultProps = {
    height: 667,
    width: 375,
    text: "Loading!",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(LoadingAnimation, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Loading!",
    },
})
