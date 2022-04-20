import { Keyboard } from "react-native";

export const loginService = (email, password, props, setLoader, navigationScreen) => {
    Keyboard.dismiss()
    setLoader(true)
    setTimeout(() => {
        if (String(email).toLowerCase() == "kareem@gmail.com" && password == "Abc123@@") {
            setLoader(false)
            props.navigation.navigate(navigationScreen)
        } else {
            setLoader(false)
            alert('Incorrect email or password')
        }
    }, 1000);
}

export const signupService = (email, password, repeatPassword, props, setLoader, navigationScreen) => {
    Keyboard.dismiss()
    if (password == repeatPassword) {
        setLoader(true)
        setTimeout(() => {
            if (String(email).toLowerCase() == "kareem@gmail.com" && password == "Abc123@@") {
                setLoader(false)
                props.navigation.navigate(navigationScreen)
            } else {
                setLoader(false)
                alert('Incorrect email or password')
            }
        }, 1000);
    } else {
        alert('Passwords do not matched')
    }
}