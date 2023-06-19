import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    ImageBackground,
    Keyboard
} from "react-native";
import PlusPhoto from "../assets/svg/PlusPhoto";
import { useNavigation } from "@react-navigation/native";
import BackgroundImage from "../assets/image/BackgroundImage.png";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const deliveryUserData = () => {
        if (emailError || email === '' || password === '') {
            console.log("Please enter a valid email and password");
            return;
        }
        const user = {
            email,
            password,
        };
        console.log(user);
        navigation.navigate("BottomNavigation");
    };
    const validateEmail = (text) => {
        setEmail(text);
        let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (reg.test(text) === false) {
            setEmailError("Email is not correct");
        } else {
            setEmailError("");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
                source={BackgroundImage}
                style={stylesLogin.imageBack}
            >
                <View style={stylesLogin.container}>
                    <View style={stylesLogin.form}>
                        <View style={stylesLogin.image}></View>
                        <TouchableOpacity>
                            <PlusPhoto style={stylesLogin.icon} />
                        </TouchableOpacity>
                        <Text style={stylesLogin.title}>Увійти</Text>
                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS == "ios" ? "padding" : "height"
                            }
                        >
                            <TextInput
                                style={stylesLogin.input}
                                placeholder="Адреса електронної пошти"
                                value={email}
                                onChangeText={validateEmail}
                                type="email"
                            />
                            {emailError ? (
                                <Text style={stylesLogin.error}>
                                    {emailError}
                                </Text>
                            ) : null}
                            <View></View>
                            <View>
                                <TextInput
                                    style={stylesLogin.lastInput}
                                    placeholder="Пароль"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                ></TextInput>
                                <TouchableOpacity
                                    style={stylesLogin.showPassword}
                                    onPress={togglePasswordVisibility}
                                >
                                    <Text style={stylesLogin.textShow}>
                                        {showPassword
                                            ? "Приховати"
                                            : "Показати"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            style={stylesLogin.buttonForm}
                            onPress={deliveryUserData}
                        >
                            <Text style={stylesLogin.textButton}>Увійти</Text>
                        </TouchableOpacity>
                        <View style={stylesLogin.link}>
                            <Text style={stylesLogin.textLink}>
                                Немає акаунту?
                            </Text>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Registration")
                                }
                            >
                                <Text
                                    style={[
                                        stylesLogin.textLink,
                                        {
                                            textDecorationLine: "underline",
                                            marginLeft: 2,
                                        },
                                    ]}
                                >
                                    Зареєстуватися
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const stylesLogin = StyleSheet.create({
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    imageBack: {
        flex: 1,
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
        fontFamily: "Roboto",
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
        alignItems: "center",
    },
    error: {
        color: "red",
        marginBottom: 16,
    },
    link: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});