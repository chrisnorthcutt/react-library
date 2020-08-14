import { Override, Data, Color, useNavigation } from "framer"
import * as React from "react"
import { colors } from "./code/Variables"
//@ts-ignore
import { Phone, SetPassword, Email_Verified } from "./canvas"
import { Modal } from "./code/Modal"

// [1]
const data = Data({
    firstName: "John",
    lastName: "Question",
    accountEmail: "JohnQ@gmail.com",
    accountPassword: "Password1",
    enteredFirstName: "",
    enteredLastName: "",
    enteredEmail: "",
    enteredPassword: "",
    reenteredPassword: "",
    enteredDOB: "",
    emptyFirstName: false,
    emptyLastName: false,
    emptyPassword: false,
    emptyEmail: false,
    rememberMe: "false",
    signInAttempted: false,
    rotate: 0,
    lastFivePasswords: [
        "Password3",
        "Password2",
        "Password1",
        "Password4",
        "Password6",
    ],
    attempts: 0,
})

function allTrue(obj) {
    for (var o in obj) if (!obj[o]) return false

    return true
}

export let meetsPasswordRequirements = {
    character: false,
    username: false,
    email: false,
    first: false,
    last: false,
    lastFive: false,
    passwordsMatch: false,
}

export function saveFirstName(props): Override {
    return {
        onValueChange(defaultValue) {
            data.enteredFirstName = defaultValue
            data.signInAttempted = false
        },
        defaultValue: data.enteredFirstName,
        empty:
            data.enteredFirstName.length === 0 && data.signInAttempted
                ? true
                : false,
    }
}

export function saveLastName(props): Override {
    return {
        onValueChange(defaultValue) {
            data.enteredLastName = defaultValue
            data.signInAttempted = false
        },
        defaultValue: data.enteredLastName,
        empty:
            data.enteredLastName.length === 0 && data.signInAttempted
                ? true
                : false,
    }
}

export function saveDOB(props): Override {
    return {
        onValueChange(defaultValue) {
            data.enteredDOB = defaultValue
            data.signInAttempted = false
        },
        defaultValue: data.enteredDOB,
        empty:
            data.enteredDOB.length === 0 && data.signInAttempted ? true : false,
    }
}

export function saveEmailAddress(props): Override {
    return {
        onValueChange(defaultValue) {
            data.enteredEmail = defaultValue
            data.signInAttempted = false
        },
        defaultValue: data.enteredEmail,
        empty:
            data.enteredEmail.length === 0 && data.signInAttempted
                ? true
                : false,
    }
}

export function setEmailAddress(props): Override {
    return {
        defaultValue: data.enteredEmail,
    }
}

export function funSignIn(): Override {
    return {
        animate: { rotate: data.rotate },
        onTap() {
            data.rotate = data.rotate + 90
        },
    }
}

export function signIn(): Override {
    const navigation = useNavigation()
    const disabledVal =
        !(data.enteredFirstName.length > 0 &&
        data.enteredLastName.length > 0 &&
        data.enteredEmail.length > 0 &&
        data.enteredDOB.length > 0)
    return {
        isDisabled: disabledVal,
        onTap() {
            data.signInAttempted = true
            if (!disabledVal) {
                navigation.push(<SetPassword />)
            }
        },
    }
}

export function savePassword(props): Override {
    return {
        onValueChange(value) {
            data.enteredPassword = value
            data.emptyPassword = data.enteredPassword.length < 0
            meetsPasswordRequirements.character =
                data.enteredPassword.length >= 10
            meetsPasswordRequirements.username =
                data.enteredPassword.indexOf(
                    data.accountEmail.toLowerCase().split("@", 1)[0]
                ) === -1
            meetsPasswordRequirements.email =
                data.enteredPassword.indexOf(
                    data.accountEmail.toLowerCase()
                ) === -1
            meetsPasswordRequirements.first =
                data.enteredPassword.indexOf(data.firstName.toLowerCase()) ===
                -1
            meetsPasswordRequirements.last =
                data.enteredPassword.indexOf(data.lastName.toLowerCase()) === -1
            meetsPasswordRequirements.lastFive =
                data.lastFivePasswords.indexOf(data.enteredPassword) === -1
        },
        empty: data.emptyPassword,
    }
}

export function saveReenteredPassword(props): Override {
    return {
        onValueChange(value) {
            data.reenteredPassword = value
            meetsPasswordRequirements.passwordsMatch =
                data.reenteredPassword === data.enteredPassword
        },
    }
}

export function PasswordRequirements(props): Override {
    return {
        children: React.Children.map(props.children, (child) => {
            if (
                meetsPasswordRequirements[child.props.name] &&
                data.enteredPassword != ""
            ) {
                return React.cloneElement(child as any, {
                    background: colors.success,
                })
            } else if (
                !meetsPasswordRequirements[child.props.name] &&
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
        isDisabled: !allTrue(meetsPasswordRequirements),
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

export function BackToAppTransition(): Override {
    const navigation = useNavigation()
    return {
        onTap() {
            navigation.customTransition(<Email_Verified />, {
                position: { top: 0, right: 0, bottom: 0, left: 0 },
                enter: { x: -375, scale: 0.5 },
                exit: { x: 375, scale: 0.5 },
                animation: {
                    duration: 0.4,
                },
            })
        },
    }
}