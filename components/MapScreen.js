import React from "react";
import { View } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
    const location = route.params.postLocation;
    return (
        <View style={styles.mapStyle}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    ...location,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.006,
                }}
            >
                <Marker
                    coordinate={{
                        ...location,
                    }}
                    title="maps"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
