import { Override, Data, Color } from "framer"

// [1]
const data = Data({
    background: Color("#09F"),
})

// [2]
export function Rotate(): Override {
    return {
        animate: { rotate: 90 },
        transition: { duration: 2 },
    }
}

// [3]
export function Hover(): Override {
    return {
        whileHover: {
            scale: 1.05,
        },
    }
}

// [4]
export function RandomColor(): Override {
    return {
        animate: {
            background: data.background,
        },
        onClick: () => {
            data.background = Color.random()
        },
    }
}

/**
 * [1] The Data object lets us assign and reuse variables like colors or numbers
 *     across our prototype.
 *
 * [2] The Rotate Override will automatically animate our elements 90 degrees when
 *     the preview loads. You can animate other things in your prototype as well,
 *     like background color, scale, and opacity.
 *
 * [3] The Hover Override will animate our element to a scale of 1.05 when you hover it.
 *
 * [4] The RandomColor Override animates the background color to the color set inside the Data object.
 *     You can set the color to anything you would like, from any override using the onClick
 *     function found in this override.
 *
 * Learn more about overrides: https://www.framer.com/support/using-framer/code-overrides/
 */
