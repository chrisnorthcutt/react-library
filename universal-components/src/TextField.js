import * as React from "react";

export function TextField(props) {
        return (
            <div>
                <label>{props.label}</label>
                <input type={props.type} disabled={props.disabled} />
            </div>
        );
}

TextField.defaultProps = {
    label: "Label",
    type: "text",
    disabled: false,
};
