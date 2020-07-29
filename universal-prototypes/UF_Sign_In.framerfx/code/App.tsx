import { Data, Override, useNavigation } from "framer"
import { Invalid_Credentials_Dialog, Check_Email } from "./canvas"
import { LoadingAnimation } from "./code/LoadingAnimation"
import { Modal } from "./code/Modal"
import * as React from "react"

const data = Data({
    emailAddress: "",
    password: "",
})

export function savePassword(): Override {
    return {
        onValueChange(value) {
            data.password = value
        },
    }
}

export function saveEmailAddress(): Override {
    return {
        onValueChange(value) {
            data.emailAddress = value
        },
        defaultValue: data.emailAddress,
    }
}

export function setEmailAddress(props): Override {
    return {
        defaultValue: data.emailAddress,
    }
}

export function signIn(): Override {
    const navigation = useNavigation()
    return {
        onTap() {
            navigation.modal(
                <Modal
                    header={"Hello"}
                    body={"Some body text"}
                    showSecondaryAction={false}
                    primaryAction={"Primary"}
                />
            )
        },
    }
}

export function sendEmailLink(): Override {
    const navigation = useNavigation()
    return {
        isDisabled: data.emailAddress === "",
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
