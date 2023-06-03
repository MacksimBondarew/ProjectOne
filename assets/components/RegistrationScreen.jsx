import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import PlusPhoto from "../svg/PlusPhoto";

export default function RegistrationScreen() {
    return (
        <>
            <View style={stylesRegister.form}>
                <View style={stylesRegister.image}></View>
                <TouchableOpacity><PlusPhoto style={stylesRegister.icon} /></TouchableOpacity>
                <Text style={stylesRegister.title}>Реєстрація</Text>
                <TextInput style={stylesRegister.input} placeholder="Логін" />
                <TextInput
                    style={stylesRegister.input}
                    placeholder="Адреса електронної пошти"
                />
                <View>
                    <TextInput
                        style={stylesRegister.lastInput}
                        placeholder="Пароль"
                    ></TextInput>
                    <TouchableOpacity style={stylesRegister.showPassword}>
                        <Text style={stylesRegister.textShow}>Показати</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={stylesRegister.buttonForm}>
                    <Text style={stylesRegister.textButton}>
                        Зареєстуватися
                    </Text>
                </TouchableOpacity>
                <Text style={stylesRegister.textLink}>
                    Вже є акаунт? Увійти
                </Text>
            </View>
        </>
    );
}

const stylesRegister = StyleSheet.create({
    form: {
        position: "relative",
        paddingBottom: 78,
        paddingTop: 92,
        paddingRight: 16,
        paddingLeft: 16,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        textAlign: "center",
    },
    image: {
        width: 120,
        height: 120,
        position: "absolute",
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        left: "39%",
        top: "-15%",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 33,
        fontFamily: "RobotoMedium",
    },
    input: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        marginBottom: 16,
    },
    lastInput: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        marginBottom: 43,
        position: "relative",
    },
    showPassword: {
        position: "absolute",
        top: 20,
        left: "75%",
    },
    textShow: {
        color: "#1B4371",
        fontFamily:  "Roboto",
        fontSize: 16,
        lineHeight: 19,
    },
    buttonForm: {
        backgroundColor: "#FF6C00",
        color: "black",
        marginBottom: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 100,
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Roboto",
    },
    textLink: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },
});
