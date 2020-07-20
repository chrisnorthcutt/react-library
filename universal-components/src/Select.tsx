import * as React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
    height: 48px;
    display: block;
    border: 1px solid blue;
    width: 100%;
`;

export function Select(props: any) {
    return (
        <div>
            <label>{props.label}</label>
            <StyledSelect>
            {props.options === undefined ? (
                    <option></option>
                ) : (
                    props.options.map((x: React.ReactNode) => (
                        <option>{x}</option>
                    ))
                )}
            </StyledSelect>
        </div>
    );
}

Select.defaultProps = {
    label: "Test",
    type: "text",
    disabled: false,
    options: ["Hello", "Bye"]
};
