import { Override, Data, Color, useNavigation } from "framer"
import * as React from "react"
import { colors } from "./code/Variables"
import { Phone } from "./canvas"

// [1]
const data = Data({
    firstName: "John",
    lastName: "Question",
    accountEmail: "JohnQ@gmail.com",
    accountPassword: "Password1",
    enteredEmail: "",
    enteredPassword: "",
    reenteredPassword: "",
    emptyPassword: false,
    emptyEmail: false,
    rememberMe: "false",
    rotate: 0,
    lastFivePasswords: [
        "Password3",
        "Password2",
        "Password1",
        "Password4",
        "Password6",
    ],
})

function allTrue(obj) {
    for (var o in obj) if (!obj[o]) return false

    return true
}

export let meetsRequirements = {
    character: false,
    username: false,
    email: false,
    first: false,
    last: false,
    lastFive: false,
    passwordsMatch: false,
}

export function savePassword(props): Override {
    return {
        onValueChange(value) {
            data.enteredPassword = value
            data.emptyPassword = data.enteredPassword.length < 0
            meetsRequirements.character = data.enteredPassword.length >= 10
            meetsRequirements.username =
                data.enteredPassword.indexOf(
                    data.accountEmail.toLowerCase().split("@", 1)[0]
                ) === -1
            meetsRequirements.email =
                data.enteredPassword.indexOf(
                    data.accountEmail.toLowerCase()
                ) === -1
            meetsRequirements.first =
                data.enteredPassword.indexOf(data.firstName.toLowerCase()) ===
                -1
            meetsRequirements.last =
                data.enteredPassword.indexOf(data.lastName.toLowerCase()) === -1
            meetsRequirements.lastFive =
                data.lastFivePasswords.indexOf(data.enteredPassword) === -1
        },
        empty: data.emptyPassword,
    }
}

export function saveReenteredPassword(props): Override {
    return {
        onValueChange(value) {
            data.reenteredPassword = value
            meetsRequirements.passwordsMatch =
                data.reenteredPassword === data.enteredPassword
        },
    }
}

export function PasswordRequirements(props): Override {
    return {
        children: React.Children.map(props.children, (child) => {
            if (
                meetsRequirements[child.props.name] &&
                data.enteredPassword != ""
            ) {
                return React.cloneElement(child as any, {
                    background: colors.success,
                })
            } else if (
                !meetsRequirements[child.props.name] &&
                data.enteredPassword != ""
            ) {
                return React.cloneElement(child as any, {
                    background: colors.danger,
                })
            } else if (data.enteredPassword === "") {
                return React.cloneElement(child as any, {
                    background: colors.grey400,
                })
            }
        }),
    }
}

export function PasswordsMatch(props): Override {
    return {
        background:
            data.enteredPassword === ""
                ? colors.grey400
                : data.enteredPassword === data.reenteredPassword
                ? colors.success
                : colors.danger,
    }
}

export function ResetPassword(): Override {
    return {
        isDisabled: !allTrue(meetsRequirements),
    }
}

export function EmailClientOverride(): Override {
    return {
        animate: {
            scale: 1,
        },
    }
}

export function OutofAppTransition(): Override {
    const navigation = useNavigation()
    return {
        onTap() {
            navigation.customTransition(<Phone />, {
                position: { top: 0, right: 0, bottom: 0, left: 0 },
                exit: { x: -375, scale: 0.5 },
                enter: { x: 375, scale: 0.5 },
                animation: {
                    duration: 0.4,
                },
            })
        },
    }
}
