import React from "react";
import { storiesOf } from "@storybook/react";
import { TextField } from "../TextField";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

const types = {
    Text: "text",
    Password: "password",
    Email: "email",
    Number: "number",
};

// Connect to Invision DSM

storiesOf("TextField", module)
    .add(
        "Text",
        () => (
            <TextField
                disabled={boolean("Disabled")}
                type={select("type", types, "password")}
                label={text("label")}
            ></TextField>
        ),
        {
            "in-dsm": {
                id: "5f0f1d26f1bc38722afd84ed",
            },
        }
    )
    .addDecorator(withKnobs);
