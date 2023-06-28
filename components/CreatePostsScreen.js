import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export default function CreatePostsScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraImg, setCameraImg] = useState("");
    const [location, setLocation] = useState(null);
    const [name, setName] = useState("");
    const [locationName, setLocationName] = useState("");
    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const navigation = useNavigation();
    resetForm = () => {
        setName("");
        setLocation(null);
        setLocationName("");
        setCameraImg("");
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

            setHasPermission(status === "granted");

            let locationUser =
                await Location.requestForegroundPermissionsAsync();
            if (locationUser.status !== "granted") {
                console.log("Permission to access location was denied");
            }

            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setLocation(coords);
        })();
        return resetForm();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    createImage = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);
            setCameraImg(uri);
        }
    };

    createImageAgain = async () => {
        setCameraImg("");
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);
            setCameraImg(uri);
        }
    };

    const deliveryData = () => {
        if (
            name === "" ||
            locationName === "" ||
            cameraImg === "" ||
            location === ""
        ) {
            return;
        } else {
            let postUser = {
                cameraImg,
                location,
                name,
                locationName,
            };
            navigation.navigate("PostsScreen", postUser);
        }
    };
    const validateLocation = (text) => {
        setLocationName(text);
        if (locationName.trim() === "") {
            setLocationError("Location is not correct");
        } else {
            setLocationError("");
        }
    };

    const validateName = (text) => {
        setName(text);
        if (name.trim() === "") {
            setNameError("Name is not correct");
        } else {
            setNameError("");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styleCreatePostsScreen.container}>
                {cameraImg ? (
                    <>
                        <Image
                            style={{
                                ...styleCreatePostsScreen.image,
                                marginBottom: 8,
                            }}
                            source={{ uri: cameraImg }}
                        />
                        <TouchableOpacity
                            style={{
                                ...styleCreatePostsScreen.load,
                                position: "absolute",
                                top: "20%",
                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                            }}
                            onPress={createImageAgain}
                        >
                            <Ionicons
                                name="camera"
                                size={20}
                                color="black"
                                style={{
                                    ...styleCreatePostsScreen.icon,
                                    color: "white",
                                }}
                            />
                        </TouchableOpacity>
                    </>
                ) : (
                    <Camera
                        zoom={0}
                        ref={setCameraRef}
                        type={type}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",

                            height: 240,
                            width: "100%",
                            marginBottom: 8,
                        }}
                    >
                        <TouchableOpacity
                            style={{ ...styleCreatePostsScreen.load, top: 0 }}
                            onPress={createImage}
                        >
                            <Ionicons
                                name="camera"
                                size={20}
                                color="black"
                                style={styleCreatePostsScreen.icon}
                            />
                        </TouchableOpacity>
                    </Camera>
                )}

                <Text style={styleCreatePostsScreen.text}>{cameraImg ? "Редагувати фото" : "Завантажте фото"}</Text>
                <TextInput
                    style={{ ...styleCreatePostsScreen.nameInput }}
                    placeholder="Назва..."
                    value={name}
                    onChangeText={validateName}
                ></TextInput>
                {nameError ? (
                    <Text
                        style={{
                            ...styleCreatePostsScreen.error,
                            marginBottom: 16,
                        }}
                    >
                        {nameError}
                    </Text>
                ) : null}
                <View style={styleCreatePostsScreen.map}>
                    <TextInput
                        style={styleCreatePostsScreen.mapInput}
                        placeholder="Місцевість..."
                        value={locationName}
                        onChangeText={validateLocation}
                    ></TextInput>
                    {locationError ? (
                        <Text style={styleCreatePostsScreen.error}>
                            {locationError}
                        </Text>
                    ) : null}
                    <Feather
                        name="map-pin"
                        size={24}
                        style={styleCreatePostsScreen.iconMap}
                        color="#BDBDBD"
                    />
                </View>
                <TouchableOpacity
                    style={{
                        ...styleCreatePostsScreen.buttonPublish,
                        backgroundColor:
                        name === "" ||
                        locationName === "" ||
                        cameraImg === "" ||
                        location === ""
                                ? "#F6F6F6"
                                : "#FF6C00",
                    }}
                    onPress={deliveryData}
                >
                    <Text
                        style={{
                            ...styleCreatePostsScreen.textButtom,
                            color:
                            name === "" ||
                            locationName === "" ||
                            cameraImg === "" ||
                            location === ""
                                    ? "gray"
                                    : "white",
                        }}
                    >
                        Опубліковати
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styleCreatePostsScreen.delete}
                    onPress={resetForm}
                >
                    <Feather name="trash-2" size={24} color="#DADADA" />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styleCreatePostsScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: "#FFFFFF",
    },
    image: {
        height: 240,
        width: "100%",
        backgroundColor: "#E8E8E8",
        marginBottom: 8,
        borderRadius: 8,
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: "#BDBDBD",
        marginBottom: 48,
    },
    icon: {
        color: "#BDBDBD",
        justifyContent: "center",
        top: "30%",
    },
    load: {
        width: 60,
        height: 60,
        alignItems: "center",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 50,
    },
    nameInput: {
        width: "100%",
        paddingBottom: 15,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom: 16,
    },
    map: {
        width: "100%",
        position: "relative",
        marginBottom: 32,
    },
    mapInput: {
        width: "100%",
        paddingBottom: 15,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        paddingLeft: 30,
        fontSize: 16,
    },
    iconMap: {
        position: "absolute",
    },
    buttonPublish: {
        width: "100%",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 120,
        paddingRight: 120,
        borderRadius: 100,
        marginBottom: 120,
    },
    textButtom: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        color: "#BDBDBD",
    },
    delete: {
        backgroundColor: "#F6F6F6",
        alignSelf: "center",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 23,
        paddingRight: 23,
        borderRadius: 20,
    },
    error: {
        color: "red",
        marginBottom: 16,
    },
});
