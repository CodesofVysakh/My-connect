import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";

const Welcome = () => {
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* Welcome image */}
                <Image style={styles.welcomeImage} resizeMode="contain" source={require("../assets/images/welcome.jpg")} />

                {/* Title */}
                <View style={{ gap: 20 }}>
                    <Text style={styles.title}>MyCon</Text>
                    <Text style={styles.punchline}>Connect with My People as wished from anywhere in the world</Text>
                </View>
                
                {/* Footer */}
                <View style={styles.footer}>
                    <Button 
                        title='Getting Started'
                        buttonStyle={{marginHorizontal: wp(3)}}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: "center"
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: "center",
        fontWeight: theme.fonts.extraBold
    },
    punchline: {
        textAlign: "center",
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text
    },
    footer: {
        gap: 30,
        width: '100%',
    }
});
