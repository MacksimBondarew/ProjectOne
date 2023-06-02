import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

export default function RegistrationScreen() {
    return (
        <>
            <View style={stylesRegister.form}>
                <View style={stylesRegister.image}></View>
                <Text style={stylesRegister.title}>Реєстрація</Text>
                <TextInput style={stylesRegister.input} placeholder="Логін" />
                <TextInput
                    style={stylesRegister.input}
                    placeholder="Адреса електронної пошти"
                />
                <TextInput style={stylesRegister.lastInput} placeholder="Пароль" />
                <Button title="Learn More" />
            </View>
        </>
    );
}

const stylesRegister = StyleSheet.create({
    form: {
        position: "absolute",
        width: 400,
        paddingBottom: 78,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        textAlign: "center",
        flex: 1,
        justifyContent: "flex-start"
    },
    image: {
        width: 120,
        height: 120,
        position: "relative",
        backgroundColor: "#F6F6F6",
        left: 120,
        bottom: 60,
        borderRadius: 16,
    },
    title: {
        textAlign: "center",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 33,
    },
    input: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        marginBottom: 16
    },
    lastInput: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        marginBottom: 43
    },
});
