import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function Gradients(props) {
    return (
        <svg width="375px" height="667px" viewBox="0 0 375 667">
            <title>Brand / Background Element / Gradient Dark Green</title>
            <defs>
                <linearGradient x1="104.301801%" y1="50%" x2="-8.60552291%" y2="50%" id="linearGradient-1">
                    <stop stop-color="#00EADD" stop-opacity="0" offset="0%"></stop>
                    <stop stop-color="#090F22" offset="100%"></stop>
                </linearGradient>
                <polygon id="path-2" points="-146 146 521 146 521 521 -146 521"></polygon>
            </defs>
            <g id="Onboarding" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Onboarding-/-Connected-Devices-/-Chapter-Break-">
                    <g id="Onboarding-/-Connected-Devices-/-1">
                        <g id="C---Brand/Background-Element/Gradient-Dark-Green">
                            <g id="Rectangle" transform="translate(187.500000, 333.500000) rotate(-90.000000) translate(-187.500000, -333.500000) ">
                                <use fill="#0C6060" xlinkHref="#path-2"></use>
                                <use fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

Gradients.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Gradients, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})
