import * as React from "react";
import { colors, sizes, borderRadii } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "./Button";

const StyledModal = styled(motion.div)`
    width: ${sizes.fit};
    height: 100%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background: ${colors.white};
    outline: none;
    border-radius: ${borderRadii.med};
    border: 1px solid #ddd;
    font-family: 'Helvetica';
    font-weight: 800;
    font-size: 1rem;
    color: ${colors.white};
    > svg {
      margin-top: 10px;
    }
`

export function ModalContainer(props: any) {
    return (
      <StyledModal>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"><path d="M 1.75 2 L 14.75 15" fill="transparent" stroke-width="2" stroke="hsl(0, 0%, 0%)" stroke-linecap="round"></path><path d="M 1.75 15 L 14.75 2" fill="transparent" stroke-width="2" stroke="hsl(0, 0%, 0%)" stroke-linecap="round"></path></svg>
      </StyledModal>
    )
}

