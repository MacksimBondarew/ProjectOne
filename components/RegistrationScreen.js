import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
} from "react-native";
import PlusPhoto from "../assets/svg/PlusPhoto";
import BackgroundImage from "../assets/image/BackgroundImage.png";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { authSignUpUser } from "../redux/auth/authOperations";
import { authStateChange } from "../redux/auth/authSlice";

export default function RegistrationScreen() {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const validateEmail = (text) => {
        setEmail(text);
        let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (reg.test(text) === false) {
            setEmailError("Email is not correct");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (text) => {
        setPassword(text);
        let reg = /^.{6,}$/;
        if (reg.test(text) === false) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmitUserRegister = async () => {
        if (passwordError || emailError || email === "" || password === "") {
            console.log("Please enter a valid email and password");
            return;
        }

        const photo = avatar
            ? await uploadImageToServer(avatar, "avatars")
            : "https://firebasestorage.googleapis.com/v0/b/first-react-native-proje-98226.appspot.com/o/userAvatars%2FDefault_pfp.svg.png?alt=media&token=7cafd3a4-f9a4-40f2-9115-9067f5a15f57";

        dispatch(authSignUpUser({ photo, login, email, password })).then(
            (data) => {
                if (data === undefined || !data.uid) {
                    alert(`Реєстрацію не виконано!`);
                    return;
                }
                dispatch(authStateChange({ stateChange: true }));
            }
        );
        navigation.navigate("Home", user);
    };

    const onLoadAvatar = async () => {
        if (avatar) {
            setAvatar(null);
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.assets[0].uri);
        }
    };

    const uploadImageToServer = async (imageUri, prefixFolder) => {
        const uniquePostId = Date.now().toString();

        if (imageUri) {
            try {
                const response = await fetch(imageUri);

                const file = await response.blob();

                const imageRef = await ref(
                    myStorage,
                    `${prefixFolder}/${uniquePostId}`
                );

                await uploadBytes(imageRef, file);

                const downloadURL = await getDownloadURL(imageRef);

                return downloadURL;
            } catch (error) {
                console.warn("uploadImageToServer: ", error);
            }
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
                source={BackgroundImage}
                style={stylesRegister.imageBack}
            >
                <View style={stylesRegister.container}>
                    <View style={stylesRegister.form}>
                        <Image
                            source={{ uri: avatar }}
                            style={stylesRegister.image}
                        ></Image>
                        <TouchableOpacity onPress={onLoadAvatar}>
                            <PlusPhoto style={stylesRegister.icon} />
                        </TouchableOpacity>
                        <Text style={stylesRegister.title}>Реєстрація</Text>
                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS == "ios" ? "padding" : "height"
                            }
                        >
                            <TextInput
                                style={stylesRegister.input}
                                placeholder="Логін"
                                value={login}
                                onChangeText={setLogin}
                            />
                            <TextInput
                                style={stylesRegister.input}
                                placeholder="Адреса електронної пошти"
                                value={email}
                                onChangeText={validateEmail}
                                type="email"
                            />
                            {emailError ? (
                                <Text style={stylesRegister.error}>
                                    {emailError}
                                </Text>
                            ) : null}
                            <View></View>
                            <View>
                                <TextInput
                                    style={stylesRegister.lastInput}
                                    placeholder="Пароль"
                                    value={password}
                                    onChangeText={validatePassword}
                                    secureTextEntry={!showPassword}
                                ></TextInput>
                                <TouchableOpacity
                                    style={stylesRegister.showPassword}
                                    onPress={togglePasswordVisibility}
                                >
                                    <Text style={stylesRegister.textShow}>
                                        {showPassword
                                            ? "Приховати"
                                            : "Показати"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            style={stylesRegister.buttonForm}
                            onPress={onSubmitUserRegister}
                        >
                            <Text style={stylesRegister.textButton}>
                                Зареєстуватися
                            </Text>
                        </TouchableOpacity>
                        <View style={stylesRegister.link}>
                            <Text style={stylesRegister.textLink}>
                                Вже є акаунт?
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text
                                    style={[
                                        stylesRegister.textLink,
                                        {
                                            textDecorationLine: "underline",
                                            marginLeft: 2,
                                        },
                                    ]}
                                >
                                    Увійти
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
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
    imageBack: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
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
