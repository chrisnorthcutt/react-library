import { Data, Override, useNavigation } from "framer"
import { Invalid_Credentials_Dialog, Check_Email, Welcome } from "./canvas"
import { LoadingAnimation } from "./code/LoadingAnimation"
import { Modal } from "./code/Modal"
import * as React from "react"

const data = Data({
    accountEmail: "JohnQ@gmail.com",
    accountPassword: "Password1",
    enteredEmail: "",
    enteredPassword: "",
    emptyPassword: false,
    emptyEmail: false,
    rememberMe: "false",
})

export function rememberMe(props): Override {
    return {
        onTap(checked) {
            data.rememberMe = checked.toString()
        },
        checked: eval(data.rememberMe),
    }
}

export function savePassword(props): Override {
    return {
        onValueChange(value) {
            data.enteredPassword = value
            data.emptyPassword = data.enteredPassword.length < 0
        },
        empty: data.emptyPassword,
    }
}

export function saveEmailAddress(props): Override {
    return {
        defaultValue: data.enteredEmail,
        onValueChange(value) {
            data.enteredEmail = value
            data.emptyEmail = data.enteredEmail.length < 0
        },
        empty: data.emptyEmail,
    }
}

export function setEmailAddress(props): Override {
    return {
        defaultValue: data.enteredEmail,
    }
}

export function signIn(): Override {
    const navigation = useNavigation()
    const matchingEmail =
        data.accountEmail.toLowerCase() === data.enteredEmail.toLowerCase()
    const matchingPassword = data.accountPassword === data.enteredPassword
    const matchingCredentials = matchingEmail && matchingPassword
    const emptyPassword = data.enteredPassword.length <= 0
    const emptyEmail = data.enteredEmail.length <= 0
    return {
        onTap(currentValue) {
            console.log(matchingCredentials)
            if (matchingCredentials) {
                navigation.push(<Welcome />, { appearsFrom: "right" })
            } else if (!matchingCredentials && !emptyPassword && !emptyEmail) {
                navigation.modal(
                    <Modal
                        header={"Invalid Credentials"}
                        body={
                            "Your email and/or password combination were invalid. Please try again."
                        }
                        showSecondaryAction={false}
                        primaryAction={"Ok"}
                    />
                )
            } else if (emptyEmail && !emptyPassword) {
                data.emptyEmail = true
            } else if (emptyPassword && !emptyEmail) {
                data.emptyPassword = true
            } else if (emptyPassword && emptyEmail) {
                data.emptyEmail = true
                data.emptyPassword = true
            }
        },
    }
}

export function sendEmailLink(): Override {
    const navigation = useNavigation()
    return {
        isDisabled: data.enteredEmail === "",
        onTap() {
            navigation.modal(
                <LoadingAnimation
                    text={"Sending Email..."}
                    nextScreen={<Check_Email />}
                    delay={2000}
                />
            )
        },
    }
}

export function continuePasswordReset(): Override {
    const navigation = useNavigation()
    return {
        isDisabled: data.enteredEmail === "",
    }
}

export function Rotate(): Override {
    return {
        animate: { rotate: 360 },
        transition: { duration: 4 },
    }
}

export function Bell(): Override {
    return {
        animate: { rotate: [25, -25, 25, -25, 0] },
        transition: { duration: 0.75, type: "spring" },
    }
}

export function Nav(): Override {
    return {
        bottom: -56,
        animate: { bottom: 0 },
        transition: { duration: 0.5 },
    }
}

export function Trends(): Override {
    return {
        bottom: -40,
        animate: { bottom: 80 },
        transition: { delay: 0.25, duration: 0.75 },
    }
}
