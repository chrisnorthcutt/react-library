import * as React from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { motion, addScaleCorrection } from "framer-motion";

const StyledSelect = styled("div")`
    height: ${sizes.xlg};
    padding: 0 ${sizes.med};
    padding-top: 12px;
    border: 1px solid ${colors.grey400};
    border-radius: 4px;
    box-sizing: border-box;
    display: block;
`;

const Options = styled(motion.div)`
    opacity: 0;
    transform-origin: center top;
    position: absolute;
    width: 100%;
    left: 0;

`;

export function Select(props: any) {
    const [focus, setFocus] = React.useState(false);
    const toggleFocus = (event: any) => {
        setFocus(!focus);
    };

    const variants = {
        open: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        }
    }
    return (
        <div onBlur={toggleFocus}  style={{position: "relative"}}>
            <StyledSelect onClick={toggleFocus}  />
            <Options initial={focus ? "open" : "closed"} animate={focus ? "open" : "closed"} variants={variants}>
                {props.list === undefined
                    ? ""
                    : props.list.map((item: string) => (
                          <ListItem  item={item} />
                      ))}
            </Options>
        </div>
    );
}

Select.defaultProps = {
    label: "Test",
    type: "text",
    disabled: false,
    list: ["Bananna", "Apple"],
};
