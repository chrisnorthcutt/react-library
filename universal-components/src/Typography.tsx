import styled from "styled-components";

const fontFamily = 'Roboto, sans-serif';

export const H1 = styled.h1`
    font-size: 50px;
    font-weight: 400;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`

export const H2 = styled.h2`
    font-size: 38px;
    font-weight: 600;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`

export const H3 = styled.h3`
    font-size: 28px;
    font-weight: 200;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`

export const H4 = styled.h4`
    font-size: 21px;
    font-weight: 700;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`

export const H5 = styled.h5`
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`

export const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.color || "#333"};
    font-family: ${fontFamily};
`