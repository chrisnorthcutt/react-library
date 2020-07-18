import * as React from "react";
import { colors } from "./colors";

export function Button(props: any) {
    const buttonStyle = {
        color: colors["primary-400"],
        background: colors["grey-200"]
    }
    return (
        <button style={buttonStyle}>
            Howdy
        </button>
    )
}

Button.defaultProps = {
    text: "Heeey"
}
