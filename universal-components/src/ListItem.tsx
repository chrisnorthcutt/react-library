import * as React from "react";
import { colors, sizes } from "./variables";
import * as Type from "./Typography";
import styled from "styled-components";

const Item = styled.div`
    height: ${sizes.xlg};
    background: white;
    display: flex;
    align-content: center;
    &:hover {
        background-color: ${colors.grey200}
    }
    &:active {
        background-color: #CAF0FF;
    }
    
`;

export function ListItem(props: any) {
    return (
        <Item>
            <Type.Body1>{props.item}</Type.Body1>
        </Item>
    );
}
