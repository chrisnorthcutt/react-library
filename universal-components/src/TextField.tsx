import * as React from "react"

export function TextField(props: any) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} disabled={props.disabled} />
        </div>
    )
}

TextField.defaultProps = {
    label: "Test",
    type: "text",
    disabled: false,
}
