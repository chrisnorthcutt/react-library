import { Data, Override, useNavigation } from "framer";
import {
    Invalid_Credentials_Dialog,
    Check_Email,
    Welcome,
    Email_Client,
} from "./canvas";
import { LoadingAnimation } from "./code/LoadingAnimation";
import { Modal } from "./code/Modal";
import * as React from "react";
import {colors} from "./code/Variables"

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
    successColor: "#45BA7F",
    errorColor: "#D52B1E",
});

function allTrue(obj) {
    for (var o in obj) if (!obj[o]) return false;

    return true;
}

export let meetsRequirements = {
    character: false,
    username: false,
    email: false,
    first: false,
    last: false,
    lastFive: false,
    passwordsMatch: false,
};

export function rememberMe(props): Override {
    return {
        onTap(checked) {
            data.rememberMe = checked.toString();
        },
        checked: eval(data.rememberMe),
    };
}

export function savePassword(props): Override {
    return {
        onValueChange(value) {
            data.enteredPassword = value;
            data.emptyPassword = data.enteredPassword.length < 0;
            meetsRequirements.character = data.enteredPassword.length >= 10;
            meetsRequirements.username =
                data.enteredPassword.indexOf(
                    data.accountEmail.toLowerCase().split("@", 1)[0]
                ) === -1;
            meetsRequirements.email =
                data.enteredPassword.indexOf(
                    data.accountEmail.toLowerCase()
                ) === -1;
            meetsRequirements.first =
                data.enteredPassword.indexOf(data.firstName.toLowerCase()) ===
                -1;
            meetsRequirements.last =
                data.enteredPassword.indexOf(data.lastName.toLowerCase()) ===
                -1;
            meetsRequirements.lastFive =
                data.lastFivePasswords.indexOf(data.enteredPassword) === -1;
        },
        empty: data.emptyPassword,
    };
}

export function saveReenteredPassword(props): Override {
    return {
        onValueChange(value) {
            data.reenteredPassword = value;
            meetsRequirements.passwordsMatch =
                data.reenteredPassword === data.enteredPassword;
        },
    };
}

export function saveEmailAddress(props): Override {
    return {
        onValueChange(defaultValue) {
            data.enteredEmail = defaultValue;
            data.emptyEmail = data.enteredEmail.length < 0;
        },
        defaultValue: data.enteredEmail,
        empty: data.emptyEmail,
    };
}

export function setEmailAddress(props): Override {
    return {
        defaultValue: data.enteredEmail,
    };
}

export function funSignIn(): Override {
    return {
        animate: { rotate: data.rotate },
        onTap() {
            data.rotate = data.rotate + 90;
        },
    };
}

export function signIn(): Override {
    const navigation = useNavigation();
    const matchingEmail =
        data.accountEmail.toLowerCase() === data.enteredEmail.toLowerCase();
    const matchingPassword = data.accountPassword === data.enteredPassword;
    const matchingCredentials = matchingEmail && matchingPassword;
    const emptyPassword = data.enteredPassword.length <= 0;
    const emptyEmail = data.enteredEmail.length <= 0;
    return {
        onTap(currentValue) {
            console.log(matchingCredentials);
            if (matchingCredentials) {
                navigation.modal(
                    <LoadingAnimation
                        text={"Siging In..."}
                        nextScreen={<Welcome />}
                        delay={2000}
                    />
                );
            } else if (!matchingCredentials && !emptyPassword && !emptyEmail) {
                navigation.modal(
                    <Modal
                        header={"Invalid Credentials"}
                        body={`Thats not the right password for ${data.accountEmail}. The correct password is: ${data.accountPassword}`}
                        showSecondaryAction={false}
                        primaryAction={"Ok"}
                    />
                );
            } else if (emptyEmail && !emptyPassword) {
                data.emptyEmail = true;
            } else if (emptyPassword && !emptyEmail) {
                data.emptyPassword = true;
            } else if (emptyPassword && emptyEmail) {
                data.emptyEmail = true;
                data.emptyPassword = true;
            }
        },
    };
}

export function sendEmailLink(): Override {
    const navigation = useNavigation();
    return {
        isDisabled: data.enteredEmail === "",
        onTap() {
            navigation.modal(
                <LoadingAnimation
                    text={"Sending Email..."}
                    nextScreen={<Email_Client />}
                    delay={2000}
                />
            );
        },
    };
}

export function continuePasswordReset(): Override {
    const navigation = useNavigation();
    return {
        isDisabled: data.enteredEmail === "",
    };
}

export function Rotate(): Override {
    return {
        animate: { rotate: 360 },
        transition: { duration: 4 },
    };
}

export function Bell(): Override {
    return {
        animate: { rotate: [25, -25, 25, -25, 0] },
        //@ts-ignore
        transition: { duration: 0.75, type: "spring" },
    };
}

export function Nav(): Override {
    return {
        bottom: -56,
        animate: { bottom: 0 },
        transition: { duration: 0.5 },
    };
}

export function Trends(): Override {
    return {
        bottom: -40,
        animate: { bottom: 80 },
        transition: { delay: 0.25, duration: 0.75 },
    };
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
                });
            } else if (
                !meetsRequirements[child.props.name] &&
                data.enteredPassword != ""
            ) {
                return React.cloneElement(child as any, {
                    background: colors.danger,
                });
            } else if (data.enteredPassword === "") {
                return React.cloneElement(child as any, {
                    background: colors.grey400,
                });
            }
        }),
    };
}

export function PasswordsMatch(props): Override {
    return {
        background:
            data.enteredPassword === ""
                ? colors.grey400
                : data.enteredPassword === data.reenteredPassword
                ? colors.success
                : colors.danger,
    };
}

export function ResetPassword(): Override {
    return {
        isDisabled: !allTrue(meetsRequirements),
    };
}
