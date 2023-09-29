import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Signin = ({ navigation }) => {
    const [userName, setUserName] = useState("Email or phone number");
    const [password, setPassword] = useState("Pass");
    const [agree, setAgree] = useState(true);


    const submit = () => {
        // return Alert.alert(userName, password);
        if (userName === "wecodeforyou" && password === "admin") {
            Alert.alert(`Welcome ${userName}`);
            // console.log(`Welcome ${userName}`);
            navigation.navigate('Home');
        } else {
            Alert.alert(`Incorrect username and pass`);
            // console.log("Incorrect Password or Username")
        }
    };


    return (
        <View style={{
            height: responsiveHeight(100),
            width: responsiveWidth(100),
            backgroundColor: "black",
        }} >
            <StatusBar
                barStyle="dark-content"
                hidden={true}
                backgroundColor="#F7F7F7"
            />
            <View style={{
                textAlign: "center",
                justifyContent: "center"
            }}>
                <Image source={require("../../assets/Netflix.png")}
                    style={{
                        height: responsiveHeight(7),
                        width: responsiveWidth(50),
                        marginHorizontal: responsiveWidth(25),
                        marginTop: responsiveHeight(4),
                    }}
                />
            </View>

            <View style={{
                height: responsiveHeight(50),
                width: responsiveWidth(80),
                marginHorizontal: responsiveWidth(4),
                marginTop: responsiveHeight(4),
            }}>
                <Text style={{ color: "white", fontSize: responsiveFontSize(4), fontWeight: "600", marginTop: 10, marginBottom: 14, }}>
                    Sign In
                </Text>
                <View>
                    <TextInput style={styles.inputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder='Email or phone number'
                        placeholderTextColor="#FFFFFF"
                        onChangeText={(actualData) => setUserName(actualData)}
                    />
                    {/* {console.log(JSON.stringify(setUserName))} */}
                    <TextInput style={styles.inputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor="#FFFFFF"
                        onChangeText={(actualData) => setPassword(actualData)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => submit()}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginVertical: 11, }}>
                    <Text style={{ color: "#6E6D6D", marginHorizontal: 5, fontSize: responsiveFontSize(2) }}>
                        New to Netflix?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>
                            Sign up now.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        borderRadius: 8,
        width: responsiveWidth(90),
        color: "white",
        fontSize: responsiveFontSize(1.7),
        backgroundColor: "#333",
        marginVertical: responsiveHeight(1),
    },

    buttonStyle: {
        borderRadius: 5,
        marginTop: 32,
        backgroundColor: "#e50914",
        width: responsiveWidth(90),
        paddingVertical: 2,

    },
    buttonText: {
        color: "white",
        paddingVertical: responsiveHeight(1.8),
        fontSize: responsiveFontSize(2),
        textAlign: "center",
    },
})