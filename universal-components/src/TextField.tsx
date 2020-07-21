import * as React from "react"
import "./TextField.css"

export function TextField(props: any) {
    return (
        <div>
            <label>{props.label}</label>
            <input className="uf" type={props.type} disabled={props.disabled} />
        </div>
    )
}

TextField.defaultProps = {
    label: "Test",
    type: "text",
    disabled: false,
}
