import styled from "styled-components";

export const H1 = styled.h1`
    color: ${(props) => props.color || "#333"};
    font-size: 96px;
    font-weight: 300;
    line-height: 0px;
    letterspacing: -1.5px;
    text-transform: none;
`;

export const H2 = styled.h2`
    color: ${(props) => props.color || "#333"};
    font-size: 38px;
    font-weight: 300;
    line-height: 0px;
    letter-spacing: -0.5px;
    text-transform: none;
`;

export const H3 = styled.h3`
    color: ${(props) => props.color || "#333"};
    font-size: 48px;
    font-weight: 500;
    line-height: 0px;
    letter-spacing: normal;
    text-transform: none;
`;

export const H4 = styled.h4`
    color: ${(props) => props.color || "#333"};
    font-size: 34px;
    font-weight: 500;
    line-height: 0px;
    letter-spacing: 0.25px;
    text-transform: none;
`;

export const H5 = styled.h5`
    color: ${(props) => props.color || "#333"};
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
`;

export const H6 = styled.h6`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.01em;
    text-transform: none;
`;

export const Caption = styled.p`
    color: ${(props) => props.color || "#333"};
    margin-top: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.4px;
    text-transform: none;
`;

export const Body1 = styled.p`
    color: ${(props) => props.color || "#333"};
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.44px;
    text-transform: none;
`;

export const Body2 = styled.p`
    color: ${(props) => props.color || "#333"};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: none;
`;

export const ButtonText = styled.span`
    color: ${(props) => props.color || "#333"};
    font-size: 14px;
    font-weight: 700;
    line-height: 0px;
    letter-spacing: normal;
    text-transform: none;
`;
