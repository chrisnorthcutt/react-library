import * as React from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import * as Type from "./Typography";

export const ListItem = styled.div`
    height: 48px;
    display: flex;
    justify-items: center;
    display: block;
    border: 1px solid ${colors.grey200};
    width: 100%;
    background-color: white;
    padding: 0 ${sizes.med};
`;

export function List(props: any) {
    return (
        <div>
            <label>{props.label}</label>
            <div>
                {props.options === undefined ? (
                    <ListItem></ListItem>
                ) : (
                    props.options.map((x: React.ReactNode) => (
                        <ListItem>
                            <Type.Body1 color={colors.grey900}>
                                {x}
                            </Type.Body1>
                        </ListItem>
                    ))
                )}
            </div>
        </div>
    );
}

List.defaultProps = {
    options: ["Item 1", "Item 2"],
    icon: true,
    name: "arrowRight"
};
