import * as React from "react";
import {useState} from "react";
import { colors, sizes } from "./variables";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "./Button";

const StyledModal = styled(motion.div)`
    width: ${sizes.modal};
    height: 40vh;
    padding: 0.5rem 1rem;
    background: ${colors.white};
    outline: none;
    border-radius: 0.5vh;
    border: 1px solid #ddd;
    font-family: 'Helvetica';
    font-weight: 800;
    font-size: 1rem;
    color: ${colors.white};
    
    > .header {
      height: 4rem;
      background: #ddd;
      font-size: 1.6rem;
      color: ${colors.black};
      text-align: center;
      line-height: 4rem;
    }
    > .body {

    }
    > .actions {
      position: relative;
      bottom: 10px;
      height: 4rem;
      background: #eee;
    }
`

export function Modal(props: any) {
    return (
      <StyledModal>
        <div className="header">Header</div>
        <div className="body">Body</div>
        <div className="actions"><Button size="big" /></div>
      </StyledModal>
    )
}

