import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function StatusBar(props) {
    const { text, tint, onTap, ...rest } = props

    return (
        <svg width="375" height="80">
            <g id="D---Navigation/B---Header-Top/A1---88px-OLD">
                <g id="D---Navigation/B---Header-Top/x/x-Atoms/Left/Type" transform="translate(0.000000, 24.000000)" font-family="Roboto-Medium, Roboto" font-size="18" font-weight="400" letter-spacing="0.44" line-spacing="24">
                    <text id="✏️-⬅️-LEFT-TEXT"></text>
                </g>
                <g id="x-Device/iOS/Element/Top-Bar/Dark">
                    <g id="Pin-Right" stroke-width="1" fill-rule="evenodd" transform="translate(297.500000, 3.000000)">
                        <g id="Battery" transform="translate(9.000000, 0.000000)">
                            <g transform="translate(36.000000, 1.500000)">
                                <path d="M20.7951435,0.5 L3.2048565,0.5 C2.23205669,0.5 1.87226874,0.583615246 1.5147423,0.774822479 C1.19575795,0.945417173 0.945417173,1.19575795 0.774822479,1.5147423 C0.583615246,1.87226874 0.5,2.23205669 0.5,3.2048565 L0.5,8.2951435 C0.5,9.26794331 0.583615246,9.62773126 0.774822479,9.9852577 C0.945417173,10.304242 1.19575795,10.5545828 1.5147423,10.7251775 C1.87226874,10.9163848 2.23205669,11 3.2048565,11 L22.0738202,11 C22.4676488,11 22.8241938,10.8403694 23.0822816,10.5822816 C23.3403694,10.3241938 23.5,9.96764884 23.5,9.57382015 L23.5,3.2048565 C23.5,2.23205669 23.4163848,1.87226874 23.2251775,1.5147423 C23.0545828,1.19575795 22.804242,0.945417173 22.4852577,0.774822479 C22.1277313,0.583615246 21.7679433,0.5 20.7951435,0.5 Z" id="Border" stroke="#FFFFFF" opacity="0.400000006"></path>
                                <path d="M25.0004626,4.00011912 C25.8628415,4.22230136 26.5,5.00523813 26.5,5.93699126 C26.5,6.86874438 25.8628415,7.65168116 25.0004626,7.8738634 Z" id="Nub" fill="#FFFFFF" opacity="0.400000006"></path>
                                <path d="M2.5,2 L21.5,2 C21.7761424,2 22,2.22385763 22,2.5 L22,9 C22,9.27614237 21.7761424,9.5 21.5,9.5 L2.5,9.5 C2.22385763,9.5 2,9.27614237 2,9 L2,2.5 C2,2.22385763 2.22385763,2 2.5,2 Z" id="Charge" fill="#FFFFFF"></path>
                            </g>
                            <text id="100%" font-family="Helvetica" font-size="12" font-weight="normal" fill="#FFFFFF">
                                <tspan x="2.30859375" y="11.5">100%</tspan>
                            </text>
                        </g>
                        <polyline id="Bluetooth" stroke="#FFFFFF" points="0.5 4 6.5 9.5 3.5 12 3.5 2 6.5 4.5 0.5 10"></polyline>
                    </g>
                    <text id="Time" font-family="Helvetica" font-size="12" font-weight="normal" fill="#FFFFFF">
                        <tspan x="164.655273" y="14.5">9:27 PM</tspan>
                    </text>
                    <g id="Pin-Left" stroke-width="1" fill-rule="evenodd" transform="translate(5.500000, 3.000000)" fill="#FFFFFF">
                        <path d="M65.3295628,4.82956276 C67.2063161,3.07441257 69.7276868,2 72.5,2 C75.2723132,2 77.7936839,3.07441257 79.6704372,4.82956276 L78.2552384,6.24476162 C76.7412564,4.85107918 74.7200183,4 72.5,4 C70.2799817,4 68.2587436,4.85107918 66.7447616,6.24476162 L65.3295628,4.82956276 L65.3295628,4.82956276 Z M67.8065309,7.30653087 C69.0481225,6.18377399 70.6942093,5.5 72.5,5.5 C74.3057907,5.5 75.9518775,6.18377399 77.1934691,7.30653087 L75.7767384,8.72326155 C74.8991992,7.96124278 73.7534641,7.5 72.5,7.5 C71.2465359,7.5 70.1008008,7.96124278 69.2232616,8.72326155 L67.8065309,7.30653087 Z M70.2877088,9.78770884 C70.890654,9.29532392 71.6608387,9 72.5,9 C73.3391613,9 74.109346,9.29532392 74.7122912,9.78770884 L72.5,12 L70.2877088,9.78770884 L70.2877088,9.78770884 Z" id="Wifi"></path>
                        <text id="Carrier" font-family="Helvetica" font-size="12" font-weight="normal">
                            <tspan x="20" y="11.5">Sketch</tspan>
                        </text>
                        <path d="M2,7.5 C2.55228475,7.5 3,7.94771525 3,8.5 L3,11 C3,11.5522847 2.55228475,12 2,12 L1,12 C0.44771525,12 6.76353751e-17,11.5522847 0,11 L0,8.5 C-6.76353751e-17,7.94771525 0.44771525,7.5 1,7.5 L2,7.5 Z M6.5,6 C7.05228475,6 7.5,6.44771525 7.5,7 L7.5,11 C7.5,11.5522847 7.05228475,12 6.5,12 L5.5,12 C4.94771525,12 4.5,11.5522847 4.5,11 L4.5,7 C4.5,6.44771525 4.94771525,6 5.5,6 L6.5,6 Z M11,4 C11.5522847,4 12,4.44771525 12,5 L12,11 C12,11.5522847 11.5522847,12 11,12 L10,12 C9.44771525,12 9,11.5522847 9,11 L9,5 C9,4.44771525 9.44771525,4 10,4 L11,4 Z M15.5,2 C16.0522847,2 16.5,2.44771525 16.5,3 L16.5,11 C16.5,11.5522847 16.0522847,12 15.5,12 L14.5,12 C13.9477153,12 13.5,11.5522847 13.5,11 L13.5,3 C13.5,2.44771525 13.9477153,2 14.5,2 L15.5,2 Z" id="Mobile-Signal"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
}

StatusBar.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(StatusBar, {
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
