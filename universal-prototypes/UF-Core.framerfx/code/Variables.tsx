export const colors = {
    warning: "#f69a19",
    warningDark: "#c75200",
    success: "#45ba7f",
    successDark: "#31845b",
    danger: "#d52b1e",
    dangerDark: "#aa2218",
    grey200: "#eeeeee",
    grey900: "#212121",
    primary900: "#00384d",
    primary600: "#0081b3",
    grey400: "#bdbdbd",
    grey700: "#616161",
    primary400: "#00a1de",
    white: "#ffffff",
    black: "#000000",
}

export const converToREM = (size) => {
    return size / 16 + "rem"
}

const base = 8

export const spacing = {
    "1x": converToREM(1 * base),
    "2x": converToREM(2 * base),
    "3x": converToREM(3 * base),
    "4x": converToREM(4 * base),
    "5x": converToREM(5 * base),
    "6x": converToREM(6 * base),
}

export const borderRadius = {
    small: "4px",
    med: "8px",
    lg: "16px",
    circle: "50%",
}

export const shadows = {
    z1:
        "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)",
    z2: "0 -2px 2px 0 rgba(0,0,0,0.07)",
    z2i: "0 2px 2px 0 rgba(0,0,0,0.07)",
    z5:
        "0 3px 5px -1px rgba(0,0,0,0.20), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12)",
}

export const fontFamily = "Roboto, sans-serif"
